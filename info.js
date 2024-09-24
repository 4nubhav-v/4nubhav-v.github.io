const email = process.env.NEXT_PUBLIC_EMAIL;
const phoneno = process.env.NEXT_PUBLIC_PHONENO;
let st1 = document.getElementById("info1").innerText;
let st2 = document.getElementById("info2").innerText;
st1 = `${st1} ${email}`;
st2 = `${st2} ${phoneno}`;
document.getElementById("info1").innerText = st1;
document.getElementById("info2").innerText = st2;
