
var i = 0;
var txt =` I am a homemaker and I am currently 41 years old. Despite facing some challenges in maintaining a consistent study routine due to the responsibilities of marriage, I am passionate about education, and pursuing a career is my ambition.

My academic journey includes completing studies up to 9th grade in school, followed by private studies for 10th, 11th, and 12th grades. Presently, I am enrolled in the 2nd year of a B.Com correspondence course at Bharathidasan University in Trichy.

In addition to my ongoing academic pursuits, I am actively learning full-stack development through Guvi..
<Thankyou..!!>`;
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    
    
  }
}
typeWriter()
