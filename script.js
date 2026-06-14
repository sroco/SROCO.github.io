function showSection(section) {
  const body = document.body;
  const content = document.getElementById("content");
  content.style.background = "rgba(0, 0, 0, 0.5)"

  switch(section) {

    case 'home':
      body.style.background = "url('mark-lyu-BDIcmo7netA-unsplash.jpg') no-repeat center/cover";
      content.style.background = "#00000000"
      content.innerHTML = ""
      break;

    case 'portfolio':
      body.style.background = "#355974";
      content.innerHTML = `
        <div class = about_me>
        <h2>Hey there! Let me introduce myself first</h2>
        <img src="selfie.jpeg" alt="Selfie of Santiago Rodríguez" class="profile-img">
        <p>I'm Santiago Rodriguez. An architect based in Colombia with over 5 years experience in different fields within 
        the AEC industry and BIM specialist with 5 years of experience delivering residential, healthcare, and hospitality projects. Proficient in BIM 
        coordination and documentation using Revit, Dynamo, and Navisworks, with additional experience in Python for workflow automation 
        and model management. Skilled in multidisciplinary coordination, model QA/QC, and production of construction documentation within 
        collaborative environments.</p> 
        <p>Experienced working on architectural projects in the United States and Canada, supporting consultant coordination and design 
        development across project phases.
        </p> 
        </div>  

        <h2>Casa Fátima</h2>
        <p>Explore our selected projects showcasing innovation, design, and sustainability.</p>
        <img src="FÁTIMA_1.png" alt="Portfolio project">
        <h2>Nido del halcón</h2>
        <p>Explore our selected projects showcasing innovation, design, and sustainability.</p>
        <img src="ROCO_LOGO_B-T.png" alt="Portfolio project">
        <h2>Conjunto Cova de Iria</h2>
        <p>Explore our selected projects showcasing innovation, design, and sustainability.</p>
        <img src="ROCO_LOGO_B-T.png" alt="Portfolio project">
        <div>
        <button onclick="showSection('about')" type = "submit" class = "bottom_button">Let's talk!</button>
        <button onclick="showSection('home')" type = "submit" class = "bottom_button">Home</button>
        </div>    
      `;
      break;

          case 'about':
      body.style.background = "#959f89";
      content.innerHTML = `
        <h2>Hey there!</h2>
        <p>In ROCO we are please to help you find the best ways to solve any issue or improvement possibility you have in your compay workflow.
        let us know from you! And we will be happy to help</p>
        <form action ="https://script.google.com/macros/s/AKfycbyfuVEfxja-EoYsAtAlJe0bukNUgl48GJPtkfnTVLV4aThp-5VmM3-MBxtlGPRydI8_/exec" method = "POST">
        <label>Please tell us your full name</label>
        <input type = "text" name = "fullname" placeholder = "Your name">
        <label>Please give us an email so we can contact you</label>
        <input type = "email" name = "email" placeholder = "Insert your email">
        <label>What are your key words? (If multiple keywords, please separate them with a comma)</label>
        <input type = "text" name = "keywords" placeholder = "e.g. Sustainability, Construction, Architecture, Software, Estimates">
        <label>Please tell us, what brought you here? we will be happy to help</label>
        <textarea name = "message" placeholder = "What brought you here"></textarea>
        <button type = "submit" class = "bottom_button">Send</button>
        <button onclick="showSection('home')" type = "submit" class = "bottom_button">Home</button>
        </form>
      `;
      break;
      
    case 'revit':
      body.style.background = "#9194ed";
      content.innerHTML = `
        <h2>Revit - BIM</h2>
        <p>Our expertise in Building Information Modeling (BIM) allows for precision, collaboration, and efficiency.</p>
        <div>
        <button onclick="showSection('about')" type = "submit" class = "bottom_button">Let's talk!</button>
        <button onclick="showSection('home')" type = "submit" class = "bottom_button">Home</button>
        </div>
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
        <div>
        <button type = "button" class = "tutorial">Watch Tutorial Here</button>
        <button type = "button" class = "market">Buy</button>
        </div>
        <p></p>
        <h2>Set Detail Numbers Automatically In A Single Sheet</h2>
        <p></p>
        <img src="Diapositiva2.JPG" alt="Construction work">
        <p></p>
        <div>
        <button type = "button" class = "tutorial">Watch Tutorial Here</button>
        <button type = "button" class = "market">Buy</button>
        </div>
        <p></p>
        <h2>Name Elevations Automatically</h2>
        <p></p>
        <img src= "Diapositiva3.JPG" alt="Revit project">
        <p></p>
        <div>
        <button type = "button" class = "tutorial">Watch Tutorial Here</button>
        <button type = "button" class = "market">Buy</button>
        </div>
        <button onclick="showSection('about')" type = "submit" class = "bottom_button">Let's talk!</button>
        <button onclick="showSection('home')" type = "submit" class = "bottom_button">Home</button>
        <p></p>
      `;
      break;

    case 'bioclimatic':
      body.style.background = "#416b3e";
      content.innerHTML = `
        <h2>Sustainable housing based on some main principles</h2>
        <img src="PSICOMETRIC-CHART.jpeg" alt="Bioclimatic house">
        <p>Bioclimatic housing designed to harmonize with the environment while ensuring comfort and efficiency.</p>
        <h2>Thermal Comfort</h2>
        <p>Bioclimatic housing designed to harmonize with the environment while ensuring comfort and efficiency.</p>
        <h2>Passive Dessing</h2>
        <p>Bioclimatic housing designed to harmonize with the environment while ensuring comfort and efficiency.</p>
        <h2>Water</h2>
        <p>Bioclimatic housing designed to harmonize with the environment while ensuring comfort and efficiency.</p>
        <h2>Energy</h2>
        <p>Bioclimatic housing designed to harmonize with the environment while ensuring comfort and efficiency.</p>
        <h2>Materials</h2>
        <p>Bioclimatic housing designed to harmonize with the environment while ensuring comfort and efficiency.</p>
        <h2>Green</h2>
        <p>Bioclimatic housing designed to harmonize with the environment while ensuring comfort and efficiency.</p>
        <div>
        <button onclick="showSection('about')" type = "submit" class = "bottom_button">Let's talk!</button>
        <button onclick="showSection('home')" type = "submit" class = "bottom_button">Home</button>
        </div>
      `;
      break;
    
  }

}
