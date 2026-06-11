function showSection(section) {
  const body = document.body;
  const content = document.getElementById("content");

  switch(section) {

    case 'home':
      body.style.background = "url('mark-lyu-BDIcmo7netA-unsplash.jpg') no-repeat center/cover";
      content.innerHTML = ""
      break;

    case 'portfolio':
      body.style.background = "#52C5F2";
      content.innerHTML = `
        <h2>About me - Santiago Rodríguez</h2>
        <img src="selfie.jpeg" alt="Selfie of Santiago Rodríguez" class="profile-img">
        <p>Architect based in Colombia with over 3 years experience in different fields within 
        the AEC industry and BIM specialist with 5 years of experience delivering residential, healthcare, and hospitality projects. Proficient in BIM 
        coordination and documentation using Revit, Dynamo, and Navisworks, with additional experience in Python for workflow automation 
        and model management. Skilled in multidisciplinary coordination, model QA/QC, and production of construction documentation within 
        collaborative environments. </p> 

        <p>Experienced working on architectural projects in the United States and Canada, supporting consultant coordination and design 
        development across project phases.
        </p> 

        <h2>Casa Fátima</h2>
        <p>Explore our selected projects showcasing innovation, design, and sustainability.</p>
        <img src="FÁTIMA_1.png" alt="Portfolio project">
        <h2>Nido del halcón</h2>
        <p>Explore our selected projects showcasing innovation, design, and sustainability.</p>
        <img src="ROCO_LOGO_B-T.png" alt="Portfolio project">
        <h2>Conjunto Cova de Iria</h2>
        <p>Explore our selected projects showcasing innovation, design, and sustainability.</p>
        <img src="ROCO_LOGO_B-T.png" alt="Portfolio project">        
      `;
      break;

          case 'store':
      body.style.background = "#508609";
      content.innerHTML = `
        <h2>Revit - BIM</h2>
        <p>Our expertise in Building Information Modeling (BIM) allows for precision, collaboration, and efficiency.</p>
        <img src="blueprint.jpg" alt="Revit project">
      `;
      break;
      
    case 'revit':
      body.style.background = "#4078f1";
      content.innerHTML = `
        <h2>Revit - BIM</h2>
        <p>Our expertise in Building Information Modeling (BIM) allows for precision, collaboration, and efficiency.</p>
        <img src="blueprint.jpg" alt="Revit project">
      `;
      break;

    case 'obras':
      body.style.background = "#525ff2";
      content.innerHTML = `
        <h2>Obras</h2>
        <p>From design to execution, our works reflect commitment and quality in construction.</p>
        <img src="https://picsum.photos/id/1067/800/400" alt="Construction work">
      `;
      break;

      case 'PyRevit - Store':
      body.style.background = "#52e5f2";
      content.innerHTML = `
        <h2>Transform any view type into a drafting view</h2>
        <p></p>
        <img src="Diapositiva1.JPG" alt="Construction work">
        <p></p>
        <h2>BUY</h2>
        <p></p>
        <h2>Set Detail Numbers Automatically In A Single Sheet</h2>
        <p></p>
        <img src="Diapositiva2.JPG" alt="Construction work">
        <p></p>
        <h2>BUY</h2>
        <p></p>
        <h2>Name Elevations Automatically</h2>
        <p></p>
        <img src= "Diapositiva3.JPG" alt="Revit project">
        <p></p>
        <h2>BUY</h2>
        <p></p>
      `;
      break;

    case 'bioclimatic':
      body.style.background = "#5ff252";
      content.innerHTML = `
        <h2>Vivienda Bioclimática</h2>
        <p>Bioclimatic housing designed to harmonize with the environment while ensuring comfort and efficiency.</p>
        <img src="PSICOMETRIC-CHART.jpeg" alt="Bioclimatic house">
      `;
      break;
    
  }
}
