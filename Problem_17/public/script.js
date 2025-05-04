fetch("/api/employees")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("employee-container");
    data.forEach(emp => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${emp.image}" width="100" height="100" alt="${emp.name}">
        <h3>${emp.name}</h3>
        <p><strong>${emp.designation}</strong></p>
        <p>${emp.department}</p>
        <p>Salary: ₹${emp.salary.toLocaleString()}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => console.error("Error fetching employees:", err));
