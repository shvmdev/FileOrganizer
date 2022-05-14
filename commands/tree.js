let fs = require('fs')
let path=require('path')
function treeFn(dirpath) {

    if (dirpath == undefined) {
			treehelper(process.cwd(),"")
			return;
    }
    
    if (fs.existsSync(dirpath)) {
        treehelper(dirpath, " ");
        console.log("See the tree view")
    }
    else {
        console.log("🤪🤪 Enter a valid path !!!");
    }
    

}


function treehelper(dirpath, indent) {

    //is File or Folder
    if (fs.lstatSync(dirpath).isFile()) {
        let filename = path.basename(dirpath)
        console.log(`${indent} ⟦ ${filename}`)
    }
    else {
        console.log(`${indent} >> ${path.basename(dirpath)}`)
        let readdircontent = fs.readdirSync(dirpath);
        for (let i = 0; i < readdircontent.length; i++) {
					//check it is file
					//if folder make it recurisve
					let newpath = path.join(dirpath, readdircontent[i]);
					treehelper(newpath,indent+'\t')
			}
    } 
    
    
}

function isFile(pahfile) {
    return fs.lstatSync(pathfile).isFile();
}

function isDir(pathfolder) {
    return fs.lstatSync(pathfolder).isDirectory();
}

module.exports = {
    treeFunc:treeFn
}