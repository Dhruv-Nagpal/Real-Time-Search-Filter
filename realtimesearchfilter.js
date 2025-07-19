const people = [
      {
        name: "Dhruv Nagpal",
        desc: "Software Developer",
        img: "https://images.unsplash.com/photo-1622352445868-3f4aa8d2c1f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwaW1hZ2VzfGVufDB8fDB8fHww"
      },
      {
        name: "Drishti Sharma",
        desc: "Frontend Developer",
        img: "https://images.unsplash.com/photo-1622352579597-f6c295b71ea3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlJTIwaW1hZ2VzfGVufDB8fDB8fHww"
      },
      {
        name: "Rohan Mehta",
        desc: "Backend Engineer",
        img: "https://images.unsplash.com/photo-1611662781749-2d208fec7e44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        name: "Sneha Singh",
        desc: "UI/UX Designer",
        img: "https://images.unsplash.com/photo-1605581494291-317cf1f77ddf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
      }
    ];

    let container = document.querySelector(".cardcontainer");

     function showpeople(arr){
        container.innerHTML = "";
     arr.forEach(person => {
      
      const card = document.createElement("div");
      card.className = "card";

      const img = document.createElement("img");
      img.src = person.img;

      const h3 = document.createElement("h3");
      h3.textContent = person.name;

      const p = document.createElement("p");
      p.textContent = person.desc;

      card.appendChild(img);
      card.appendChild(h3);
      card.appendChild(p);
    
      container.appendChild(card);
    });
     }

     showpeople(people);

     let input = document.querySelector("input");
     input.addEventListener("input",function(){
        let newpeople = people.filter((people)=>{
            return people.name.toLowerCase().startsWith(input.value.toLowerCase());
        })
        showpeople(newpeople);
     })