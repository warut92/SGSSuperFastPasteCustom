let firstInput10 = 32
let firstInput40 = 29
let score_data
let score_data_40
let score_data_10
let input
let inputCell40
let inputCell10
let grade_4 = []
let grade_35 = []
let grade_3 = []
let grade_25 = []
let grade_2 = []
let grade_15 = []
let grade_1 = []
let grade_ro = []
let grade_other = []

//add color for mid term input
function colorizeMidTerm() {
  const inputs = document.querySelectorAll("input");
  for (let i = 0; i < 40; i++) {
    inputs[firstInput40 + 4 + (13 * i)].style.border = ""
    inputs[firstInput10 + 4 + (13 * i)].style.border = ""
    inputs[firstInput40 + (13 * i)].style.border = "2px solid red"
    inputs[firstInput10 + (13 * i)].style.border = "2px solid red"
    inputCell40 = firstInput40
    inputCell10 = firstInput10
    inputs[37 + (13 * i)].style.border = ""
  }
}

//add color for final term input
function colorizeFilnalTerm() {
  const inputs = document.querySelectorAll("input");
  for (let i = 0; i < 40; i++) {
    inputs[firstInput40 + (13 * i)].style.border = ""
    inputs[firstInput10 + (13 * i)].style.border = ""
    inputs[firstInput40 + 4 + (13 * i)].style.border = "2px solid red"
    inputs[firstInput10 + 4 + (13 * i)].style.border = "2px solid red"
    inputCell40 = firstInput40 + 4
    inputCell10 = firstInput10 + 4
    inputs[37 + (13 * i)].style.border = ""
  }
}

//run funtion for starting check error inputed score ending with 4 or 9
function colorizeEvalGrade() {
  //reset the previous value
  grade_4 = []
  grade_35 = []
  grade_3 = []
  grade_25 = []
  grade_2 = []
  grade_15 = []
  grade_1 = []
  grade_ro = []
  grade_other = []
  for (let i = 0; i < 40; i++) {
    const inputs = document.querySelectorAll("input");

    //re-color 40 10
    inputs[firstInput40 + (13 * i)].style.border = ""
    inputs[firstInput10 + (13 * i)].style.border = ""
    inputs[firstInput40 + 4 + (13 * i)].style.border = ""
    inputs[firstInput10 + 4 + (13 * i)].style.border = ""

    //color border input to its value via conditions
    inputs[37 + (13 * i)].style.border = ""

    if (Number(inputs[37 + (13 * i)].value) <= 50.00) {
      inputs[37 + (13 * i)].style.border = "2px solid red"
    } else if (Number(inputs[37 + (13 * i)].value) === 84.00) {
      inputs[37 + (13 * i)].style.border = "2px solid Magenta"
    } else if (Number(inputs[37 + (13 * i)].value) === 74.00) {
      inputs[37 + (13 * i)].style.border = "2px solid Magenta"
    } else if (Number(inputs[37 + (13 * i)].value) === 64.00) {
      inputs[37 + (13 * i)].style.border = "2px solid Magenta"
    } else if (Number(inputs[37 + (13 * i)].value) === 79.00) {
      inputs[37 + (13 * i)].style.border = "2px solid Magenta"
    } else if (Number(inputs[37 + (13 * i)].value) === 69.00) {
      inputs[37 + (13 * i)].style.border = "2px solid Magenta"
    } else if (Number(inputs[37 + (13 * i)].value) === 59.00) {
      inputs[37 + (13 * i)].style.border = "2px solid Magenta"
    }
    //find grade and divid into groups
    if (inputs[38 + (13 * i)].value === "4") {
      inputs[38 + (13 * i)].style.border = "2px solid green"
      grade_4.push(i)
    } else if (inputs[38 + (13 * i)].value === "3") {
      inputs[38 + (13 * i)].style.border = "2px solid green"
      grade_3.push(i)
    } else if (inputs[38 + (13 * i)].value === "3.5") {
      inputs[38 + (13 * i)].style.border = "2px solid green"
      grade_35.push(i)
    } else if (inputs[38 + (13 * i)].value === "2.5") {
      inputs[38 + (13 * i)].style.border = "2px solid blue"
      grade_25.push(i)
    } else if (inputs[38 + (13 * i)].value === "2") {
      inputs[38 + (13 * i)].style.border = "2px solid blue"
      grade_2.push(i)
    } else if (inputs[38 + (13 * i)].value === "1.5") {
      inputs[38 + (13 * i)].style.border = "2px solid red"
      grade_other.push(i)
      grade_15.push(i)
    } else if (inputs[38 + (13 * i)].value === "1") {
      inputs[38 + (13 * i)].style.border = "2px solid red"
      grade_other.push(i)
      grade_1.push(i)
    } else if (inputs[38 + (13 * i)].value === "ร") {
      inputs[38 + (13 * i)].style.border = "2px solid red"
      grade_other.push(i)
      grade_ro.push(i)
    }
    //view the detials via console log
    console.log("4 :",grade_4," = " + grade_4.length
    + "\n3.5 : ",grade_35," = " + grade_35.length
    + "\n3 : ",grade_3," = "+ grade_3.length
    + "\n2.5 : ",grade_25," = " + grade_25.length
    + "\n2 : ",grade_2," = " + grade_2.length
    + "\n1.5 :",grade_15," = " + grade_15.length
    + "\n1 :",grade_1," = " + grade_1.length
    + "\nร :",grade_ro," = " + grade_ro.length
    + "\ntotal = " + Number(grade_4.length + grade_35.length + grade_3.length + grade_25.length + grade_2.length + grade_15.length + grade_1.length + grade_ro.length)

    + "\n\n1.5-1 ร : ",grade_other," = " + grade_other.length );
  }
}
//key s to save file
  document.addEventListener('keydown', function(e) {
    if (e.isComposing || e.keyCode === 83) {
      console.log("keydown s: please change file name and then save th file");

      const content = grade_4
      + "\n" + grade_35
      + "\n" + grade_3
      + "\n" + grade_25
      + "\n" + grade_2
      + "\n" + grade_15
      + "\n" + grade_1
      + "\n" + grade_ro

      const blob = new Blob([content], { type: "text/plain" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'example.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  });

let content = ""
let fileName = ""
  function openFile() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';

    fileInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      console.log(file.name);

      fileName = document.createElement("p");
      fileName.innerText = file.name;

      //show the file name to the screen
      document.body.appendChild(fileName)

      const reader = new FileReader();

      reader.onload = (event) => {
        content = event.target.result;
        console.log(content);
      };
      reader.readAsText(file);
    });
    fileInput.click();
  }

//press o for openFile
  document.addEventListener('keydown', (e) => {
      if (e.isComposing || e.keyCode === 79) {
        console.log("keydown o: please open the file");
          openFile()
    }
  });

  //press l for add value to "การอ่าน คิดวิเคราะห์ และเขียน"
  document.addEventListener('keydown', (e) => {
    if (e.isComposing || e.keyCode === 76) {
      const inputs = document.querySelectorAll("input");
      console.log(content);
      let splitContent = content.split('\n')
      let content_25 = splitContent[3].toString()
      let content_2 = splitContent[4].toString()
      console.log('CONTENT_2', content_2)
      let content_1 = splitContent[5].toString()

      let arr_content_25 = content_25.split(',')
      let arr_content_2 = content_2.split(',')
      console.log('ARR_CONTENT_2', arr_content_2)
      let arr_content_1 = content_1.split(',')

      for (let i = 0; i < arr_content_2.length; i++) {
        //2
        console.log(inputs[29 + (9 * arr_content_2[i])]);
        inputs[29 + (9 * arr_content_2[i])].style.border = "2px solid Fuchsia"
        inputs[30 + (9 * arr_content_2[i])].style.border = "2px solid Fuchsia"
        inputs[31 + (9 * arr_content_2[i])].style.border = "2px solid Fuchsia"
        inputs[32 + (9 * arr_content_2[i])].style.border = "2px solid Fuchsia"
        inputs[33 + (9 * arr_content_2[i])].style.border = "2px solid Fuchsia"
      }

      for (let i = 0; i < arr_content_25.length; i++) {
        //2.5
        console.log(inputs[29 + (9 * arr_content_25[i])]);
        inputs[29 + (9 * arr_content_25[i])].style.border = "2px solid orange"
        inputs[30 + (9 * arr_content_25[i])].style.border = "2px solid orange"
        inputs[31 + (9 * arr_content_25[i])].style.border = "2px solid orange"
        inputs[32 + (9 * arr_content_25[i])].style.border = "2px solid orange"
        inputs[33 + (9 * arr_content_25[i])].style.border = "2px solid orange"
      }
      for (let i = 0; i < arr_content_1.length; i++) {
        //1
        inputs[29 + (9 * arr_content_1[i])].style.border = "2px solid red"
        inputs[30 + (9 * arr_content_1[i])].style.border = "2px solid red"
        inputs[31 + (9 * arr_content_1[i])].style.border = "2px solid red"
        inputs[32 + (9 * arr_content_1[i])].style.border = "2px solid red"
        inputs[33 + (9 * arr_content_1[i])].style.border = "2px solid red"
      }
    }
  });
  //press k for "คุณลักษณะอันพึงประสงค์"
  document.addEventListener('keydown', (e) => {
    if (e.isComposing || e.keyCode === 75) {

      const inputs = document.querySelectorAll("input");
      console.log(content);
      let splitContent = content.split('\n')
      let content_35 = splitContent[1].toString()
      let content_25 = splitContent[3].toString()
      let content_2  = splitContent[4].toString()
      let content_15 = splitContent[5].toString()
      let content_1  = splitContent[6].toString()
      let content_ro = splitContent[7].toString()

      let arr_content_35 = content_35.split(',')
      let arr_content_25 = content_25.split(',')
      let arr_content_2 = content_2.split(',')
      let arr_content_15 = content_15.split(',')
      let arr_content_1 = content_1.split(',')
      let arr_content_ro = content_ro.split(',')


    if (arr_content_25[0] !== "") {
      for (let i = 0; i < arr_content_25.length; i++) {
        inputs[37 + (14 * arr_content_25[i])].style.border = "2px solid orange"
        inputs[39 + (14 * arr_content_25[i])].style.border = "2px solid orange"
      }
    }

    if (arr_content_2[0] !== "") {
      for (let i = 0; i < arr_content_2.length; i++) {
        inputs[37 + (14 * arr_content_2[i])].style.border = "2px solid orange"
        inputs[39 + (14 * arr_content_2[i])].style.border = "2px solid orange"
      }
    }

    if (arr_content_15[0] !== "") {
      for (let i = 0; i < arr_content_15.length; i++) {
        inputs[37 + (14 * arr_content_15[i])].style.border = "2px solid red"
        inputs[39 + (14 * arr_content_15[i])].style.border = "2px solid red"
      }
    }

    if (arr_content_1[0] !== "") {
      for (let i = 0; i < arr_content_1.length; i++) {
        inputs[37 + (14 * arr_content_1[i])].style.border = "2px solid red"
        inputs[39 + (14 * arr_content_1[i])].style.border = "2px solid red"
      }
    }

    if (arr_content_ro[0] !== "") {
      for (let i = 0; i < arr_content_ro.length; i++) {
        inputs[34 + (14 * arr_content_ro[i])].style.border = "2px solid red"
        inputs[35 + (14 * arr_content_ro[i])].style.border = "2px solid red"
        inputs[36 + (14 * arr_content_ro[i])].style.border = "2px solid red"
        inputs[37 + (14 * arr_content_ro[i])].style.border = "2px solid red"
        inputs[38 + (14 * arr_content_ro[i])].style.border = "2px solid red"
        inputs[39 + (14 * arr_content_ro[i])].style.border = "2px solid red"
        inputs[40 + (14 * arr_content_ro[i])].style.border = "2px solid red"
        inputs[41 + (14 * arr_content_ro[i])].style.border = "2px solid red"
      }
     }
    }
  });

  //reset color for all inputs by pressing r
  document.addEventListener('keydown', function(e) {
      if (e.isComposing || e.keyCode === 82) {
        console.log("reset color for all inputs");
        const inputs = document.querySelectorAll("input");
        for (let i = 0; i < inputs.length; i++) {
          inputs[i].style.border = ""
        }
      }
  });

document.addEventListener("paste", (e) => {
  e.preventDefault();
  //copy data from speadsheet and convert something
  score_data = (e.clipboardData || window.clipboardData).getData("text");
  score_data = score_data.split("\n")
  score_data = score_data.toString().split("\t")
  score_data = score_data.toString().split(",")

  //creat arr for 40 odd num
  score_data_40 = score_data.filter((value, index) => index % 2 === 0)

  //creat arr for 10 even num
  score_data_10 = score_data.filter((value, index) => index % 2 !== 0)

  const inputs = document.querySelectorAll("input");

   for (let i = 0; i < score_data_40.length; i++) {
     //allInputNode[x].style.backgroundColor = "red"
     inputs[inputCell40 + (13 * i)].value = score_data_40[i]
     inputs[inputCell10 + (13 * i)].value = score_data_10[i]
   }
})

//log to view pasting data
document.addEventListener('paste', function(e) {
  // body...
  console.log('score_data', score_data)
  console.log('SCORE_DATA_40', score_data_40)
  console.log('SCORE_DATA_10 ', score_data_10 )
});

browser.runtime.onMessage.addListener(function(message) {
  if (message.action === "midTerm") {
    colorizeMidTerm()
  } else if (message.action === "finalTerm") {
    colorizeFilnalTerm()
  } else if (message.action === "evalGrade") {
    colorizeEvalGrade()
  }
});
