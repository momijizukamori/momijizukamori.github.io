document.getElementById("msgInput").addEventListener("change", generate);
document
  .querySelectorAll("input")
  .forEach((el) => el.addEventListener("change", generate));
document.getElementById("headerName").addEventListener("change", generate);

function generate() {
  const text = document.getElementById("msgInput").value;
  const useHeader = document.getElementById("useHeader").checked;
  const headerName = document.getElementById("headerName").value;

  const split = text.split(/\r?\n/);
  const imgMatch = /https?:\/\/.*\.(:?png|jpeg|jpg|gif|svg)/;

  let reply = document.getElementById("startReply").checked;
  let image = false;

  const cleaned = [];

  split.forEach((token) => {
    if (token == "") {
      //switch users
      reply = !reply;
    } else if (image) {
      // last token was an image, this is the alt text
      cleaned[cleaned.length - 1].alt = token;
      image = false; //unset image flag
    } else if (token.match(imgMatch)) {
      image = true; //set image flag
      cleaned.push({ image, reply, url: token });
    } else {
      // regular message
      cleaned.push({ image, reply, msg: token });
    }
  });

  let imageCSS = [];
  let outputMsgs = cleaned.map((msg, i) => {
    if (msg.image) {
      const imgCSS = `
  #workskin .image-${i} \{
  float: ${msg.reply ? "right" : "left"};
  background-image: url("${msg.url}");
\}
    `;
      imageCSS.push(imgCSS);
      return `<a href="${msg.url}" rel="nofollow"><span class="image image-${i}" title="${msg.alt}"></span></a><br />`;
    } else {
      return `<span class="${
        msg.reply ? "reply" : "text"
      }"><span class="hide"><b>${msg.reply ? "Reply" : "Message"}:</b></span> ${
        msg.msg
      }</span><br />`;
    }
  });

  const imageBlock = `#workskin .image \{
  margin: 0 0 0.5em;
  border-radius: 1em;
  width: 50%;
  min-height: 75%;
  clear: both;
  position: relative;
  background-repeat: no-repeat;
  background-size: 100%;
  display: inline-block;
  padding-top: 50%;
\}`;

  const mainBlock = `#workskin .phone \{
  max-width: 400px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: table;
  margin: auto;
\}

#workskin .messagebody \{
  background-color: #FFFFFF;
  display: table;
  padding-left: .5em;
  padding-right: .5em;
\}

#workskin .text \{
  float: left;
  color: #000000;
  margin: 0 0 0.5em;
  border-radius: 1em;
  padding: 0.5em 1em;
  background: #e5e5ea;
  max-width: 75%;
  clear: both;
  position: relative;
\}

#workskin .text::after \{
  content: "";
  position: absolute;
  left: -.5em;
  bottom: 0;
  width: 0.5em;
  height: 1em;
  border-right: 0.5em solid #e5e5ea;
  border-bottom-right-radius: 1em 0.5em;
\}

#workskin .reply \{
  float: right;
  color: #FFFFFF;
  margin: 0 0 0.5em;
  border-radius: 1em;
  padding: 0.5em 1em;
  background: #1289fe;
  max-width: 75%;
  clear: both;
  position: relative;
\}

#workskin .reply::after \{
  content: "";
  position: absolute;
  right: -0.5em;
  bottom: 0;
  width: 0.5em;
  height: 1em;
  border-left: 0.5em solid #1289fe;
  border-bottom-left-radius: 1em 0.5em;
\}

#workskin .hide \{
  display: none;
\}

`;

  const headerBlock = `#workskin .header \{
  min-width: 400px;
  background-color: #f6f6f6;
  border-bottom: 1px solid #b2b2b2;
  color: #000000;
  font-weight: bold;
  padding-bottom: .5em;
  padding-top: .5em;
  margin-left: -.5em;
  margin-right: -.5em;
  margin-bottom: -2em;
  text-align: center;
  text-transform: capitalize;
  display: table;
\}

`;
  const finalHTML =
    `<div class="phone"><p class="messagebody">` +
    (useHeader ? `<span class="header">Jiping</span><br /><br />` : "") +
    outputMsgs.join("\n") +
    "</p></div>";
  const finalCSS =
    mainBlock +
    (useHeader ? headerBlock : "") +
    (imageCSS.length > 0 ? imageBlock : "") +
    imageCSS.join("\n");

  document.getElementById("outputHTML").value = finalHTML;
  document.getElementById("workskin").innerHTML = finalHTML;
  document.getElementById("outputCSS").value = finalCSS;

  var styleSheet = document.createElement("style");
  styleSheet.innerText = finalCSS;
  document.head.appendChild(styleSheet);
}

generate();
