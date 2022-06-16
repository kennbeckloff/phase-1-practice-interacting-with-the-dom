var seconds = 0;
var count = document.getElementById('counter');

function incrementSeconds() {
    seconds += 1;
  count.innerText=seconds
}

var cancel = setInterval(incrementSeconds, 1000);

var counter = 0;
        const var_counter = document.querySelector('#counter');
        const elem = document.querySelector('#plus');
        elem.addEventListener("click", function () {
            counter += 1;
            var_counter.innerHTML = counter;
        });
        var startTime=0;
        const minus = document.querySelector('#minus');
        minus.addEventListener("click", function(){
           if(startTime>0){
             counter.innerText=startTime -=1
           }
           else{
             startTime=0;
           }
          
      
      });
      const pause =document.getElementById("pause");
      
      pause.addEventListener("click", function(){
        currentvalue =document.getElementById("pause").innerText;
        (currentvalue === "pause")?(
            this.innerText = "resume",
            minus.disabled = true,
            plus.disabled = true,
            heart.disabled = true,
            submit.disabled = true,
            clearInterval(startTimer)
    ):(
            this.innerText = "pause",
            minus.disabled = false,
            plus.disabled = false,
            heart.disabled = false,
            submit.disabled = false
    )
    })

    const heart =document.getElementById("heart");
    let likes =document.querySelector(".likes");
    heart.addEventListener("click", () => {
      const likesList = document.createElement("li");
      likesList.innerHTML = `${counterElement.innerHTML} has been liked `;
      likes.append(likesList);
  })
  
  const form = document.querySelector("form");
  const commentInput =document.getElementById("comment-input");
  const submit =document.getElementById("submit");
  const onsubmit = (event) => {
      event.preventDefault();
     
      const inputValue = event.target["comment-input"].value;
      const list = document.querySelector("#list");
      const comment = document.createElement("p");
      comment.textContent = inputValue;
      list.appendChild(comment)
      form.reset()
  }
  
  submit.addEventListener("submit", onsubmit);