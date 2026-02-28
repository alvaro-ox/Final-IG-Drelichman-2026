const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const dirs = ['adopcion', 'ayuda', 'catalogo', 'contacto', 'creditos', 'cuidados', 'historias', 'juego'];

// Fix index.html inside the main section directories
dirs.forEach(dir => {
    const indexPath = path.join(rootDir, dir, 'index.html');
    if (fs.existsSync(indexPath)) {
        let content = fs.readFileSync(indexPath, 'utf8');
        // Update src/ JS and CSS files
        content = content.replace(/src="src\//g, 'src="../src/');
        content = content.replace(/href="src\//g, 'href="../src/');
        
        // Update references to root html files
        content = content.replace(/href="([a-z-]+)\.html"/g, 'href="..//"');
        content = content.replace(/href="index\.html"/g, 'href="../"');
        
        fs.writeFileSync(indexPath, content);
        console.log('Fixed ' + dir + '/index.html');
    }
});
