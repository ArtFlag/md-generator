var fs = require("fs");
var Sentencer = require("sentencer");
var path = require('path');
var yargs = require("yargs");
var argv = yargs
  .help()
  .option("number", {
    alias: "n",
    describe: "The number of files to generate.",
    default: 1,
  })
  .option("folder", {
    alias: "f",
    describe: "The folder that will contain the generated files.",
    default: "generated_files",
  }).argv;

const generateFiles = (number, folder) => {
  fs.mkdir(folder, function (err) {
    if (err) {
      console.log(err);
    }
  });
  for (let index = 0; index < number; index++) {
    let name =
      Sentencer.make("{{ noun }}_") + Math.floor(Math.random() * 10) + ".md";
    let text = generateText();
    try {
      generateFile(name, text, folder);
    } catch (error) {
      console.log("Couldn't generate file", name, error);
    }
  }
};

const generateFile = (name, text, folder) => {
  // Write 1 file
  fs.writeFile(`${folder}/${name}`, text, function (err) {
    if (err) throw err;
  });
};

const generateText = () => {
  frontMatter = "---\n";
  frontMatter += `title: ${Sentencer.make("{{ an_adjective }} {{ noun }}")}\n`;
  frontMatter += "---\n";

  content = Sentencer.make(
    "{{ a_noun }} and {{ an_adjective }} {{ noun }} in it. {{ a_noun }} and {{ an_adjective }} {{ noun }} in it. {{ a_noun }} and {{ an_adjective }} {{ noun }} in it."
  );

  return frontMatter + content;
};

let options = argv;
fs.rm(options.folder, { recursive: true, force: true }, (err) => {
  if(err){
      // File deletion failed
      console.error(err.message);
      return;
  }
  console.log("Generating...");
  generateFiles(options.number, options.folder)
  console.log("Done")
})

