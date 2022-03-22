let inquirer = require('inquirer');



mourse_alphabet = {
    
    "A":".-",
    "B":"-...",
    "C":"-.-.",
    "D":"-..",
    "E":".",
    "F":"..-.",
    "G":"--.",
    "H":"....",
    "I":"..",
    "J":".---",
    "K":"-.-",
    "L":".-..",
    "M":"--",
    "N":"-.",
    "O":"---",
    "P":".--.",
    "Q":"--.-",
    "R":".-.",
    "S":"...",
    "T":"--",
    "U":"..-",
    "V":"...-",
    "W":".--",
    "X":"-..-",
    "Y":"-.--",
    "Z":"--..",


}


decodeMorse_tanslater_ = (morseCode) =>{
    
    let mourse_arr = String(morseCode).split(" "),
    full_word = ""

    mourse_arr.forEach((el) =>{
        for (let [letter,mourse] of Object.entries(mourse_alphabet)){

            if (el == mourse)full_word += letter;

        }
    })

    return full_word
    
}

decodeMorse = (morseCode) =>{
    
    let mourse_arr = String(morseCode).split(""),
    full_word = ""
    word = ""
    wordArr = []
   
    mourse_arr.push(" ") 
    for (let i = 0 ; i < mourse_arr.length; i++)
    {
        if (mourse_arr[i] == " " )
        {
            
            for (let [letter,mourse] of Object.entries(mourse_alphabet)){

                if (word == mourse)
                {
                    full_word += letter;
                    word = ""
                }
    
            }
            
            if (word === "")
            {
                full_word += "_"
            }
           
        }
        else
        {
            
            word += mourse_arr[i]
        }
    }

    let f_word = full_word.replace(/\___/g, ' ');
    f_word = f_word.replace(/_/g, '');

    return f_word

}





let encodeMourse = (text) =>{

    let full_word = ""
    text = text.toUpperCase()
    
    let text_chars = text.split("")
    text_chars = text_chars

    
        for (let i = 0 ; i < text_chars.length ; i++)
        {
   
            for (let [letter,mourse] of Object.entries(mourse_alphabet)){
                



                if (text_chars[i] == letter )
                {
                    full_word += mourse + " ";
                    
                }
                
            }
        }
        return full_word 
}






function Main()
{

    inquirer
  .prompt([
    {
      type: 'list',
      name: 'decode_or_encode',
      message: 'decode or encode mourse code?',
      choices: ['decode mourse', 'encode mourse'],
    },

    {
        type: 'input',
        name: 'mourse_text',
        message: 'print text:',
    },

  ])
  .then(answers => {
   

    let text = answers.mourse_text ;
    if(answers.decode_or_encode == "decode mourse")
    {
        console.info(decodeMorse(text))
    }
    if(answers.decode_or_encode == "encode mourse")
    {
        console.info(encodeMourse(text))
    }
  });
    
}

Main()