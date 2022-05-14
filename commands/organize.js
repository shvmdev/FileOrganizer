let fs = require('fs')
let path = require('path')
let types = {
	media: ["mp4", "mkv", "mp3","wav","png","jpeg","ogg","jpg","svg","gif"],
	archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
	documents: ["docx","doc","pdf",	"xlsx","xls","odt",	"ods","odp","odg","odf","txt","ps","tex"],
    app: ["exe", "dmg", "pkg", "deb", ".json", "js", "java","html"],

    
};

function organizeFn(dirpath) {
	//if organize folder not exists then make it
    if (dirpath == undefined) {
        // console.log("😒😒 Type a valid path --")
        dirpath=process.cwd()
    }
        if (fs.existsSync(dirpath)) {
             
            if (fs.lstatSync(dirpath).isFile()) {
                console.log("File can't be organized")
                return;
            }

						let organizedpath = path.join(dirpath, "Organized");
						if (!fs.existsSync(organizedpath)) {
							fs.mkdirSync(organizedpath);
						}
						let readdircontent = fs.readdirSync(dirpath);
						for (let i = 0; i < readdircontent.length; i++) {
							let filepath = path.join(dirpath, readdircontent[i]);
							if (isFile(filepath)) {
								let extname = path.extname(filepath).slice(1);
								let key = gettypefolder(extname);
								// console.log(key);
								let newpath = path.join(organizedpath, key);
								if (!fs.existsSync(newpath)) {
									fs.mkdirSync(newpath);
								}
								let newfilepath = path.join(newpath, path.basename(filepath));
                                fs.copyFileSync(filepath, newfilepath);    
								// search extname
								// copy that into the respective folder
                            }                   
                 }
             console.log("Folder is organized successfully 😃😃");
        }
        else {
						console.log("🤪🤪 Enter a valid path !!!");
			}
   
    
    
}


function gettypefolder(extname) {
    for (let key in types) {
        let extensionfolder=types[key]
        for (let i = 0; i < extensionfolder.length; i++){
            if (extensionfolder[i]== extname) {
                return key
            }
        }
    }
    return "others"
}

function isFile(pathname) {
    return fs.lstatSync(pathname).isFile()
}


module.exports = {
	organizeFunc: organizeFn,
};
