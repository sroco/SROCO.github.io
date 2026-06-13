function showSection(section) {
  const body = document.body;
  const content = document.getElementById("content");

  switch(section) {

    case 'home':
      body.style.background = "url('mark-lyu-BDIcmo7netA-unsplash.jpg') no-repeat center/cover";
      content.innerHTML = ""
      break;

    case 'portfolio':
      body.style.background = "#355974";
      content.innerHTML = `
        <h2>About me - Santiago Rodríguez</h2>
        <img src="selfie.jpeg" alt="Selfie of Santiago Rodríguez" class="profile-img">
        <p>Architect based in Colombia with over 3 years experience in different fields within 
        the AEC industry and BIM specialist with 5 years of experience delivering residential, healthcare, and hospitality projects. Proficient in BIM 
        coordination and documentation using Revit, Dynamo, and Navisworks, with additional experience in Python for workflow automation 
        and model management. Skilled in multidisciplinary coordination, model QA/QC, and production of construction documentation within 
        collaborative environments. self-place = right</p> 

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

          case 'about':
      body.style.background = "#959f89";
      content.innerHTML = `
        <h2>Hey there!</h2>
        <p>In ROCO we are please to help you find the best ways to solve any issue or improvement possibility you have in your compay workflow.
        let us know from you! And we will be happy to help</p>
        <form>
        <label>Please tell us your full name</label>
      <input type = "text" placeholder = "Your name">
      <label>Please give us an email so we can contact you</label>
      <input type = "email" placeholder = "Insert your email">
      <label>Please tell us, wht brought you here? we will be happy to help</label>
      <textarea placeholder = "What brought you here" textarea.style.textAlign = "left"></textarea>
      <button type = "submit" class = "market">Send</button>
      </form>
      `;
      break;
      
    case 'revit':
      body.style.background = "#2d2e4e";
      content.innerHTML = `
        <h2>Revit - BIM</h2>
        <p>Our expertise in Building Information Modeling (BIM) allows for precision, collaboration, and efficiency.</p>
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
      body.style.background = "#66787a";
      content.innerHTML = `
        <h2>Transform any view type into a drafting view</h2>
        <p></p>
        <img src="Diapositiva1.JPG" alt="Construction work">
        <p></p>
        <button type = "button" class = "market">Buy</button>
        <p></p>
        <h2>Set Detail Numbers Automatically In A Single Sheet</h2>
        <p></p>
        <img src="Diapositiva2.JPG" alt="Construction work">
        <p></p>
        <button type = "button" class = "market">Buy</button>
        <p></p>
        <h2>Name Elevations Automatically</h2>
        <p></p>
        <img src= "Diapositiva3.JPG" alt="Revit project">
        <p></p>
        <button type = "button" class = "market">Buy</button>
        <p></p>
      `;
      break;

    case 'bioclimatic':
      body.style.background = "#416b3e";
      content.innerHTML = `
        <h2>Sustainable housing</h2>
        <p>Bioclimatic housing designed to harmonize with the environment while ensuring comfort and efficiency.</p>
        <img src="PSICOMETRIC-CHART.jpeg" alt="Bioclimatic house">
      `;
      break;
    
  }
}
