// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");

    menuIcon.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });
});

// Metamask connection script
// async function connectMetamask() {
//     if (window.ethereum) {
//         try {
//             // Request account access if needed
//             await ethereum.request({ method: 'eth_requestAccounts' });
//             console.log('Connected to Metamask');
//         } catch (error) {
//             console.error('User rejected the connection request');
//         }
//     } else {
//         console.error('Metamask is not installed');
//     }
// }

// document.getElementById('connectButton').addEventListener('click', connectMetamask);
// window.addEventListener('load', async () => {
//     // Modern dapp browsers...
//     if (window.ethereum) {
//       window.web3 = new Web3(ethereum);
//       try {
//         // Request account access if needed
//         await ethereum.request({ method: 'eth_requestAccounts' });
//         // Acccounts now exposed
//         console.log("MetaMask is connected");
//       } catch (error) {
//         console.error("User denied account access");
//       }
//     }
//     // Legacy dapp browsers...
//     else if (window.web3) {
//       window.web3 = new Web3(web3.currentProvider);
//       console.log("MetaMask is connected");
//     }
//     // Non-dapp browsers...
//     else {
//       console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
//     }
//   });





  document.getElementById('connectButton').addEventListener('click', async () => {
    if (window.ethereum) {
      try {
        await ethereum.request({ method: 'eth_requestAccounts' });
        console.log("MetaMask is connected");
      } catch (error) {
        console.error("User denied account access");
      }
    } else {
      console.log('MetaMask not detected');
    }
  });



  async function getAccount() {
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    console.log(accounts[0]);
  }

  getAccount();
  document.addEventListener('DOMContentLoaded', function () {
    var sellerButton = document.getElementById('sellerButton');
    var sellerModal = document.getElementById('sellerModal');
    var closeBtn = document.querySelector('.modal .close');

    // Open the modal when the Seller button is clicked
    sellerButton.addEventListener('click', function () {
        sellerModal.style.display = 'block';
    });

    // Close the modal when the close button is clicked
    closeBtn.addEventListener('click', function () {
        sellerModal.style.display = 'none';
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener('click', function (event) {
        if (event.target === sellerModal) {
            sellerModal.style.display = 'none';
        }
    });
});
// Get the modal
var listingsModal = document.getElementById("listingsModal");

// Get the button that opens the modal
var viewListingsButton = document.querySelector(".view-listings-button");

// Get the <span> element that closes the modal
var closeListingsModal = document.querySelector("#listingsModal .close");

// When the user clicks on the button, open the modal
viewListingsButton.onclick = function() {
    listingsModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeListingsModal.onclick = function() {
    listingsModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == listingsModal) {
        listingsModal.style.display = "none";
    }
}
// Function to populate the table with demo entries
function populateListingsTable() {
  // Get the table body
  var tableBody = document.querySelector("#listingsModal tbody");

  // Demo data
  var demoListings = [
      { sNo: 1, sellerId: "S123", distance: "5 km", availableTime: "9:00 AM - 12:00 PM", totalUnit: 100, price: "$50"},
      { sNo: 2, sellerId: "S456", distance: "10 km", availableTime: "2:00 PM - 5:00 PM", totalUnit: 150, price: "$60" },
      { sNo: 3, sellerId: "S789", distance: "7 km", availableTime: "11:00 AM - 3:00 PM", totalUnit: 120, price: "$55"}
  ];

  // Clear existing rows
  tableBody.innerHTML = "";

  // Populate the table with demo entries
  demoListings.forEach(function(listing) {
      var row = document.createElement("tr");
      row.innerHTML = `
          <td>${listing.sNo}</td>
          <td>${listing.sellerId}</td>
          <td>${listing.distance}</td>
          <td>${listing.availableTime}</td>
          <td>${listing.totalUnit}</td>
          <td>${listing.price}</td>
          
      `;
      tableBody.appendChild(row);
  });
}

// Call the function to populate the table with demo entries
populateListingsTable();
// JavaScript to handle the selection event
document.addEventListener('DOMContentLoaded', function() {
  const selectButtons = document.querySelectorAll('.select-button');

  selectButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          const listingRow = button.closest('tr');
          const listingData = {
              serialNumber: listingRow.querySelector('.serial-number').textContent,
              sellerId: listingRow.querySelector('.seller-id').textContent,
              distance: listingRow.querySelector('.distance').textContent,
              timeSlot: listingRow.querySelector('.time-slot').textContent,
              totalUnit: listingRow.querySelector('.total-unit').textContent,
              price: listingRow.querySelector('.price').textContent
          };

          // Here you can store the selected listing data or perform other actions
          console.log('Selected Listing:', listingData);
      });
  });
});



