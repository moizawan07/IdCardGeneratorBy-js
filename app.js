let inputFields;
let idNo = (Math.random() * 10000 + 1000).toFixed(2);
let imgSrc;
let idCardContainer = document.getElementById("idcardContainer");
let decionValues = false;
let idCardInputs = document.querySelector(".id-card-inputs");

const createCV = () => {
  inputFields = {
    fname: document.getElementById("first-name").value,
    role: document.getElementById("role").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    dob: document.getElementById("DOB").value,
    img: document.getElementById("img").value,
    idNum: idNo,
  };
  for (let key in inputFields) {
    if (inputFields[key]) {
      decionValues = true;
    } else {
      decionValues = false;
      break;
    }
  }

  if (decionValues) {
    inputFields.img = document.getElementById("img");
    imgSrc = URL.createObjectURL(inputFields.img.files[0]);
    idCardInputs.style.display = "none";
    idCardContainer.style.display = "block";
    idCardContainer.setAttribute("data-aos", "fade-down");
    idCardContainer.setAttribute("data-aos-easing", "linear");
    idCardContainer.setAttribute("data-aos-duration", "600");
    console.log(idCardContainer);

    idCardContainer.innerHTML += `
               <div class = 'idcardMain'>
                   <div class = 'LeftMain'>
                   <div class = 'imgCon'>
                       <img src='${imgSrc}'> 
                    </div>
                    <h1 id ='head' class = 'blue'>${inputFields.fname}</h1>
                    <p>${inputFields.role}</p>
                    <div class = 'lastTxtBox'>
                       <ul>
                          <li><span class='leftTxt'>id No</span><span class= 'rightTxt'> :${inputFields.idNum}</span></li>
                          <li><span class='leftTxt'>DOB</span><span class= 'rightTxt'>   :${inputFields.dob}</span></li>
                          <li><span class='leftTxt'>Email</span><span class= 'rightTxt'> :${inputFields.email}</span></li>
                          <li><span class='leftTxt'>Phone</span><span class= 'rightTxt'> :${inputFields.phone}</span></li>
                       </ul>
                    </div>
                   </div>
                   <div id='RightMain' class='blue'></div>
                </div>
          `;
    idCardContainer.outerHTML += `
             <div class="downloaddiv" onClick="downloadIdCard()" data-aos="fade-left"
                                                                  data-aos-anchor="#example-anchor"
                                                                  data-aos-offset="100"
                                                                  data-aos-duration="1200">
                   <i class="fa-solid fa-download"></i>
                  </div>
          `;
  } else {
    alert("all fields compulsary");
  }
};

const styles = () => {
  let head = document.querySelector("#head");
  let riBackgr = document.querySelector("#RightMain");
  let selectBox = document.getElementById("selectBox");
  console.log(selectBox.value);
  // if(selectBox.value === 'Style1'){
  //   let heading =  document.querySelector('.head')
  //     if((heading.getAttribute('class')).indexOf('blue') != -1){}
  //     else{
  //         heading.classList.add('blue')
  //     }}
  if (selectBox.value === "Style1") {
    head.className = "blue";
    riBackgr.className = "blue";
  } else if (selectBox.value === "Style2") {
    head.className = "orange";
    riBackgr.className = "orange";
  } else if (selectBox.value === "Style3") {
    head.className = "green";
    riBackgr.className = "green";
  } else if (selectBox.value === "Style4") {
    head.className = "red";
    riBackgr.className = "red";
  } else if (selectBox.value === "Style5") {
    head.className = "black";
    riBackgr.className = "black";
  } else if (selectBox.value === "Style6") {
    head.className = "brown";
    riBackgr.className = "brown";
  } else if (selectBox.value === "Style7") {
    head.className = "cyan";
    riBackgr.className = "cyan";
  } else if (selectBox.value === "Style8") {
    head.className = "grey";
    riBackgr.className = "grey";
  } else if (selectBox.value === "Style9") {
    head.className = "lblue";
    riBackgr.className = "lblue";
  } else if (selectBox.value === "Style10") {
    head.className = "lgrey";
    riBackgr.className = "lgrey";
  }
};

const downloadIdCard = () => {
  const cvElement = document.getElementById("idcardContainer"); // CV ka section select karein

  // HTML2Canvas se screenshot lein
  html2canvas(cvElement).then((canvas) => {
    // Canvas ko image mein convert karein
    const image = canvas.toDataURL("image/png");

    // Image ko download karwane ke liye anchor tag banayein
    const link = document.createElement("a");
    link.href = image;
    link.download = "idCard.png"; // Download file ka naam
    link.click(); // Click event trigger karein
  });
};
