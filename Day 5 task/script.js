var resume = {
    "name": "Vasanth M",
    "email": "mathivasanth217@gmail.com",
    "phone": "9360546239",
    "address": [
        {
          "House no":"14/A",
          "street name":"Ganapathy nagar U.K.T malai, vayalour road",
          "District name": "Trichy"
          }
          ],
    "education": [
      {
        "degree": "Bachelor of Commerce",
        "major": "Commerce",
        "college": "Bishop Heber College",
        "year": 2022
      },
    ],
      }

  //For Loop:

  for (let i = 0; i < resume.address.length; i++) {
    console.log(resume.address[i]);
}

for (let i = 0; i < resume.education.length; i++) {
    console.log(resume.education[i]);
}

//for in loop;

for (let key in resume.address) {
    console.log(resume.address[key]);
}

for (let key in resume.education) {
    console.log(resume.education[key]);
}

//for of loop;

for (let key in resume.address) {
    console.log(resume.address[key]);
}

for (let key in resume.education) {
    console.log(resume.education[key]);
}

//forEach method;

for (let key in resume.address) {
    console.log(resume.address[key]);
}

for (let key in resume.education) {
    console.log(resume.education[key]);
}