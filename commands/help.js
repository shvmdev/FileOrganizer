function helpFn() {
     console.log(`List of all the commands \n
     1. To know about all the commands - type "play --help" in the terminal
     2. To view the tree structure of files and folders - type "play --tree path" in the terminal
     3. To organize the files and folders - type "play --organize path" in the terminal`
     );
}
module.exports = {
     helpFunc:helpFn
}