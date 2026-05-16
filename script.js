function showSection(section) {
  const body = document.body;
  const content = document.getElementById("content");

  switch(section) {

    case 'home':
      body.style.background = "url('mark-lyu-BDIcmo7netA-unsplash.jpg') no-repeat center/cover";
      content.innerHTML = `
      <h2>About me - Santiago Rodríguez</h2>
      <img src="selfie.jpeg" alt="Selfie of Santiago Rodríguez" class="profile-img">
      <p>I'm an Architect based in Colombia with over 3 years experience in different fields within 
      the AEC industry.Lately I've been working for a company in the US which is foucused in the </p> 
      `;
      break;

    case 'portfolio':
      body.style.background = "#52C5F2";
      content.innerHTML = `
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

    case 'revit':
      body.style.background = "white";
      content.innerHTML = `
        <h2>Revit - BIM</h2>
        <p>Our expertise in Building Information Modeling (BIM) allows for precision, collaboration, and efficiency.</p>
        <img src="https://picsum.photos/id/1050/800/400" alt="Revit project">
      `;
      break;

    case 'obras':
      body.style.background = "url('https://picsum.photos/id/1003/1600/900') no-repeat center/cover";
      content.innerHTML = `
        <h2>Obras</h2>
        <p>From design to execution, our works reflect commitment and quality in construction.</p>
        <img src="https://picsum.photos/id/1067/800/400" alt="Construction work">
      `;
      break;

      case 'Dynamo - Python - C#':
      body.style.background = "url('https://picsum.photos/id/1003/1600/900') no-repeat center/cover";
      content.innerHTML = `
        <h2>Dynamo</h2>
        <p>From design to execution, our works reflect commitment and quality in construction.</p>
        <img src="https://picsum.photos/id/1067/800/400" alt="Construction work">
        <h2>Python</h2>
        <p>From design to execution, our works reflect commitment and quality in construction.</p>
        <img src="https://picsum.photos/id/1067/800/400" alt="Construction work">
        <h2>C#</h2>
        <p>From design to execution, our works reflect commitment and quality in construction.</p>
        <img src="https://picsum.photos/id/1067/800/400" alt="Construction work">
      `;
      break;

    case 'bioclimatic':
      body.style.background = "url('nizam-photographs-x4hmbIFivDw-unsplash.jpg') no-repeat center/cover";
      content.innerHTML = `
        <h2>Vivienda Bioclimática</h2>
        <p>Bioclimatic housing designed to harmonize with the environment while ensuring comfort and efficiency.</p>
        <img src="PSICOMETRIC-CHART.jpeg" alt="Bioclimatic house">
      `;
      break;

    case 'about':
      body.style.background = "url('https://picsum.photos/id/1035/1600/900') no-repeat center/cover";
      content.innerHTML = `
        <h2>Quiénes Somos</h2>
        <p>ROCO Arquitectura es un equipo apasionado por el diseño, la innovación y la sostenibilidad.</p>
        <img src="https://picsum.photos/id/1080/800/400" alt="Team photo">
      `;
      break;
    
  }
}
