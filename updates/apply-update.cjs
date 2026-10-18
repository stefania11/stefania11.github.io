const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { createRequire } = require('module');
const dependencyRequire = createRequire(path.resolve(process.argv[3] || process.cwd(), 'package.json'));
const parser = dependencyRequire('@babel/parser');
const traverse = dependencyRequire('@babel/traverse').default;
const root = path.resolve(process.argv[2] || path.join(__dirname, '..'));
const content = JSON.parse(fs.readFileSync(path.join(root, 'updates/october-2026.json')));
const htmlPath = path.join(root, 'index.html');
const html = require('child_process').execFileSync('git', ['show', '6ee42faebfdba7d38e4dcc712a82ebe6babc6135:index.html'], {cwd:root,encoding:'utf8'});
const bundleName = html.match(/src="\/assets\/(index-[^"]+\.js)"/)[1];
const bundlePath = path.join(root, 'assets', bundleName);
const source = fs.readFileSync(bundlePath, 'utf8');
const ast = parser.parse(source, {sourceType: 'module'});
const edits = [];
const found = new Set();
function add(name, start, end, text) {
  if (found.has(name)) throw new Error('Duplicate target: ' + name);
  found.add(name); edits.push({start,end,text});
}
function field(node, name) { return node.properties.find(p => (p.key.name || p.key.value) === name).value; }
traverse(ast, {
  FunctionDeclaration(p) {
    if (p.node.id.name === 'zE') {
      const array = p.node.body.body[0].declarations[0].init;
      if (field(array.elements[0], 'title').value !== 'Real-time Experiments with an AI Co-Scientist') throw Error('Unexpected talk');
      add('talk', array.elements[0].start, array.elements[0].end, JSON.stringify(content.featuredTalk));
    }
    if (p.node.id.name === 'GE') {
      p.traverse({VariableDeclarator(v) {
        if (v.node.id.name === 's') {
          const tags = Object.fromEntries(content.papers.map(p => [p.id,p.tags]));
          add('tags', v.node.init.start+1, v.node.init.start+1, JSON.stringify(tags).slice(1,-1)+',');
        }
        if (v.node.id.name === 'l') {
          const year = v.node.init.elements[0];
          if (field(year,'year').value !== '2026') throw Error('Unexpected year');
          const items = field(field(year,'categories').elements[0],'items');
          const papers = content.papers.map(({tags,...paper}) => paper);
          add('papers', items.start+1, items.start+1, JSON.stringify(papers).slice(1,-1)+',');
        }
      }});
    }
    if (p.node.id.name === 'WE') {
      p.traverse({CallExpression(call) {
        if (call.node.arguments[0]?.value === 'main') {
          const children = field(call.node.arguments[1], 'children');
          add('home', children.elements[1].end, children.elements[1].end, ',d.jsx(SD2026Updates,{})');
        }
      }});
      const component = `
function SD2026Updates() {
  const content = ${JSON.stringify(content)};
  const link = (href, label) => d.jsx("a", {href, target:"_blank", rel:"noopener noreferrer", className:"inline-flex items-center text-blue-600 hover:text-blue-800 font-medium", children:label});
  const heading = title => d.jsxs("h2", {className:"text-4xl md:text-5xl font-bold mb-12 relative", children:[title,d.jsx("span", {className:"absolute -bottom-2 left-0 w-24 h-1 bg-[#C1F0DB]"})]});
  return d.jsxs(d.Fragment, {children:[
    d.jsx("section", {id:"recent-publications",className:"py-20 px-6 md:px-16 bg-gray-50",children:d.jsxs("div", {className:"container mx-auto",children:[
      heading("New Papers"),
      d.jsx("div", {className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:content.papers.map(paper => d.jsxs("article", {className:"bg-white p-6 rounded-xl shadow-sm flex flex-col",children:[
        d.jsx("p", {className:"text-sm font-medium text-gray-600 mb-3",children:paper.venue}),
        d.jsx("h3", {className:"text-xl font-bold mb-3",children:paper.title}),
        d.jsx("p", {className:"text-gray-700 mb-4",children:paper.authors}),
        link(paper.link,paper.link.startsWith("/pdf/") ? "Read Paper (PDF)" : "Read Paper on arXiv")
      ]},paper.id))}),
      d.jsx("div", {className:"mt-4",children:link("/publications","View All Publications")})
    ]})}),
    d.jsx("section", {id:"conferences",className:"py-20 px-6 md:px-16",children:d.jsxs("div", {className:"container mx-auto",children:[
      heading("Conferences"),
      d.jsx("div", {className:"grid grid-cols-1 gap-8",children:content.conferences.map(event => d.jsxs("article", {className:"bg-white p-6 rounded-xl shadow-sm",children:[
        d.jsx("p", {className:"text-sm font-medium text-gray-600 mb-3",children:event.date}),
        d.jsx("h3", {className:"text-xl font-bold mb-3",children:event.title}),
        d.jsx("p", {className:"text-gray-600 mb-3",children:event.location}),
        d.jsx("p", {className:"text-gray-700 mb-4",children:event.description}),
        d.jsx("p", {className:"text-sm font-medium text-gray-600 mb-3",children:event.status}),
        event.link && link(event.link,event.linkLabel)
      ]},event.title))})
    ]})})
  ]});
}
`;
      add('component',p.node.start,p.node.start,component);
    }
  }
});
if (found.size !== 5) throw Error('Missing targets '+ [...found]);
let output=source;
for (const e of edits.sort((a,b)=>b.start-a.start)) output=output.slice(0,e.start)+e.text+output.slice(e.end);
parser.parse(output,{sourceType:'module'});
const newName='index-'+crypto.createHash('sha256').update(output).digest('hex').slice(0,10)+'.js';
fs.writeFileSync(path.join(root,'assets',newName),output);
fs.writeFileSync(htmlPath,html.replace(bundleName,newName));
// GitHub Pages serves the same SPA shell at deep links.
const fallbackPath=path.join(root,'404.html');
const fallback=fs.readFileSync(fallbackPath,'utf8');
if (fallback.includes(bundleName)) fs.writeFileSync(fallbackPath,fallback.replaceAll(bundleName,newName));
console.log(JSON.stringify({oldBundle:bundleName,newBundle:newName,targets:[...found]}));
