fetch(`${window.location.origin}/api/info`)
  .then((response) => response.json())
  .then((data) => {
    console.log(`Phone: ${data.phoneNumber}, Email: ${data.email}`);
    let st1 = document.getElementById("info1").innerText;
    let st2 = document.getElementById("info2").innerText;
    st1 = `${st1} ${data.email}`;
    st2 = `${st2} ${data.phoneNumber}`;
    document.getElementById("info1").innerText = st1;
    document.getElementById("info2").innerText = st2;
  })
  .catch((error) => console.error("Error fetching data:", error));
