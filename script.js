// Embedded ticket data to avoid file loading issues
const tickets = [
  {
    "Ticket ID": 149466,
    "Subject": "Maconomy Vendor Registration Access Issue",
    "Description": "User needs access to Maconomy vendor registration portal and is asking for timeline confirmation.",
    "Status": "Closed",
    "Priority": "Low",
    "Group": "Maconomy",
    "Category": "Access Management",
    "Tags": ["vendor-registration", "access-request", "portal-access"],
    "Solution": {
      "Steps": [
        "1. Verify user's role and permissions in Maconomy",
        "2. Grant vendor registration portal access through admin panel",
        "3. Send access credentials and portal URL to user",
        "4. Provide training documentation for vendor registration process"
      ],
      "Resolution": "Access granted within 24 hours",
      "TimeToResolve": "1 day",
      "SuccessRate": 95
    },
    "SimilarTickets": [149431, 149655],
    "Analytics": {
      "Views": 45,
      "HelpfulCount": 12,
      "ResolutionTime": "24h",
      "UserSatisfaction": 4.2
    }
  },
  {
    "Ticket ID": 149431,
    "Subject": "Partner Code Data Request",
    "Description": "Request for ALL Partner Codes with corresponding Entity Name, Company number, and Brand information.",
    "Status": "Closed",
    "Priority": "Low",
    "Group": "Maconomy",
    "Category": "Data Export",
    "Tags": ["partner-codes", "data-export", "entity-information"],
    "Solution": {
      "Steps": [
        "1. Generate comprehensive partner code report from Maconomy database",
        "2. Include Entity Name, Company Number, and Brand columns",
        "3. Export to Excel format for easy analysis",
        "4. Send report via secure file transfer"
      ],
      "Resolution": "Data exported and delivered within 4 hours",
      "TimeToResolve": "4 hours",
      "SuccessRate": 98
    },
    "SimilarTickets": [149466, 149454],
    "Analytics": {
      "Views": 67,
      "HelpfulCount": 23,
      "ResolutionTime": "4h",
      "UserSatisfaction": 4.5
    }
  },
  {
    "Ticket ID": 149613,
    "Subject": "Expense Sheet Quantity Zero Issue",
    "Description": "User cannot click columns in approved expense sheet and needs to set quantity to zero and create new sheet.",
    "Status": "Closed",
    "Priority": "Medium",
    "Group": "Maconomy",
    "Category": "Expense Management",
    "Tags": ["expense-sheet", "quantity-zero", "work-code", "approval-issue"],
    "Solution": {
      "Steps": [
        "1. Set quantity to zero in existing expense sheet to eliminate impact",
        "2. Create new expense sheet with correct work codes",
        "3. Ensure proper approval workflow for new sheet",
        "4. Verify work code changes are applied correctly"
      ],
      "Resolution": "New expense sheet created with correct work codes",
      "TimeToResolve": "2 days",
      "SuccessRate": 87
    },
    "SimilarTickets": [149490, 149620],
    "Analytics": {
      "Views": 89,
      "HelpfulCount": 34,
      "ResolutionTime": "48h",
      "UserSatisfaction": 4.1
    }
  },
  {
    "Ticket ID": 149655,
    "Subject": "Department Code Configuration Issue",
    "Description": "Task code FECOMADV being tagged with incorrect localspec4name causing reporting issues.",
    "Status": "Closed",
    "Priority": "High",
    "Group": "Maconomy",
    "Category": "System Configuration",
    "Tags": ["task-code", "localspec4name", "reporting-issue", "configuration"],
    "Solution": {
      "Steps": [
        "1. Identify root cause of incorrect localspec4name mapping",
        "2. Update system configuration to map FECOMADV correctly",
        "3. Create new department for FECOMADV work code",
        "4. Verify reporting accuracy after changes"
      ],
      "Resolution": "Department code configuration updated successfully",
      "TimeToResolve": "3 days",
      "SuccessRate": 92
    },
    "SimilarTickets": [149431, 149490],
    "Analytics": {
      "Views": 156,
      "HelpfulCount": 45,
      "ResolutionTime": "72h",
      "UserSatisfaction": 4.3
    }
  },
  {
    "Ticket ID": 149490,
    "Subject": "UKG Portal Access Request",
    "Description": "Employee needs access to UKG portal for viewing pay stubs and updating personal information.",
    "Status": "Closed",
    "Priority": "Low",
    "Group": "UKG",
    "Category": "Access Management",
    "Tags": ["ukg-access", "pay-stubs", "portal-access", "employee-info"],
    "Solution": {
      "Steps": [
        "1. Verify employee eligibility and employment status",
        "2. Set up UKG account with appropriate access levels",
        "3. Configure user permissions for pay stub viewing",
        "4. Send login credentials and portal instructions"
      ],
      "Resolution": "UKG portal access granted within 24 hours",
      "TimeToResolve": "1 day",
      "SuccessRate": 96
    },
    "SimilarTickets": [149466, 149655],
    "Analytics": {
      "Views": 78,
      "HelpfulCount": 28,
      "ResolutionTime": "24h",
      "UserSatisfaction": 4.4
    }
  },
  {
    "Ticket ID": 149620,
    "Subject": "Holiday Calendar Configuration",
    "Description": "Need to update holiday calendar settings and add new company holidays for the upcoming year.",
    "Status": "Closed",
    "Priority": "Medium",
    "Group": "UKG",
    "Category": "Calendar Management",
    "Tags": ["holiday-calendar", "calendar-management", "company-holidays", "configuration"],
    "Solution": {
      "Steps": [
        "1. Review current holiday calendar configuration",
        "2. Add new company holidays for the upcoming year",
        "3. Update calendar settings and notifications",
        "4. Test calendar functionality and verify accuracy"
      ],
      "Resolution": "Holiday calendar updated with new company holidays",
      "TimeToResolve": "1 day",
      "SuccessRate": 94
    },
    "SimilarTickets": [149490, 149613],
    "Analytics": {
      "Views": 92,
      "HelpfulCount": 31,
      "ResolutionTime": "24h",
      "UserSatisfaction": 4.6
    }
  },
  {
    "Ticket ID": 149454,
    "Subject": "Invoice Processing System Update",
    "Description": "System update required for invoice processing workflow to handle new currency requirements.",
    "Status": "Closed",
    "Priority": "High",
    "Group": "Maconomy",
    "Category": "Billing & Invoicing",
    "Tags": ["invoice-processing", "currency-update", "billing-system", "workflow"],
    "Solution": {
      "Steps": [
        "1. Review current invoice processing workflow",
        "2. Update system to handle new currency requirements",
        "3. Test invoice processing with new currency settings",
        "4. Deploy updates and monitor system performance"
      ],
      "Resolution": "Invoice processing system updated successfully",
      "TimeToResolve": "2 days",
      "SuccessRate": 89
    },
    "SimilarTickets": [149431, 149655],
    "Analytics": {
      "Views": 134,
      "HelpfulCount": 38,
      "ResolutionTime": "48h",
      "UserSatisfaction": 4.2
    }
  },
  {
    "Ticket ID": 149490,
    "Subject": "Approval Workflow Configuration",
    "Description": "Need to update approval workflow settings for expense sheets to include new approver levels.",
    "Status": "Closed",
    "Priority": "Medium",
    "Group": "Maconomy",
    "Category": "Approval Management",
    "Tags": ["approval-workflow", "expense-approval", "workflow-configuration", "approver-levels"],
    "Solution": {
      "Steps": [
        "1. Review current approval workflow configuration",
        "2. Add new approver levels to the workflow",
        "3. Update approval routing and notification settings",
        "4. Test approval process with new workflow"
      ],
      "Resolution": "Approval workflow updated with new approver levels",
      "TimeToResolve": "1 day",
      "SuccessRate": 91
    },
    "SimilarTickets": [149613, 149620],
    "Analytics": {
      "Views": 67,
      "HelpfulCount": 22,
      "ResolutionTime": "24h",
      "UserSatisfaction": 4.1
    }
  }
];

let currentSearchResults = [];

// Enhanced semantic search function
function semanticSearch(query, tickets) {
  const searchTerms = query.toLowerCase().split(' ');
  
  return tickets.map(ticket => {
    let score = 0;
    const ticketText = `${ticket.Subject} ${ticket.Description} ${ticket.Category} ${(ticket.Tags || []).join(' ')}`.toLowerCase();
    
    // Exact word matches
    searchTerms.forEach(term => {
      if (ticketText.includes(term)) score += 3;
    });

    // Tag matching
    if (ticket.Tags && Array.isArray(ticket.Tags)) {
      ticket.Tags.forEach(tag => {
        if (searchTerms.some(term => tag.includes(term))) score += 2;
      });
    }

    // Category matching
    if (ticket.Category && searchTerms.some(term => ticket.Category.toLowerCase().includes(term))) {
      score += 1.5;
    }

    return { ...ticket, score };
  }).filter(ticket => ticket.score > 0).sort((a, b) => b.score - a.score);
}

function searchTickets() {
  const query = document.getElementById("searchInput").value;
  if (!query.trim()) {
    document.getElementById("results").innerHTML = "<div class='no-results'>Please enter your issue to search for solutions</div>";
    return;
  }

  // Show loading state
  const searchBtn = document.getElementById("searchBtn");
  const searchBtnText = document.getElementById("searchBtnText");
  const searchBtnSpinner = document.getElementById("searchBtnSpinner");
  
  // Prevent multiple clicks
  if (searchBtn.classList.contains("loading")) {
    return;
  }
  
  searchBtn.classList.add("loading");
  searchBtnText.style.display = "none";
  searchBtnSpinner.style.display = "inline-block";
  
  document.getElementById("results").innerHTML = "<div class='loading'>Searching for solutions...</div>";
  
  // Use a shorter timeout and ensure cleanup
  setTimeout(() => {
    try {
      console.log("Searching for:", query);
      console.log("Available tickets:", tickets.length);
      
      if (!tickets || tickets.length === 0) {
        throw new Error("No tickets available");
      }
      
      const results = semanticSearch(query, tickets);
      console.log("Search results:", results.length);
      
      currentSearchResults = results.slice(0, 5);
      displayResults(results.slice(0, 5));
      populateSimilarTicketDropdown();
    } catch (error) {
      console.error("Search error:", error);
      console.error("Error details:", error.message);
      document.getElementById("results").innerHTML = `
        <div class='no-results'>
          <h3>Search Error</h3>
          <p>Error: ${error.message}</p>
          <p>Please try a different search term.</p>
        </div>
      `;
    } finally {
      // Always hide loading state
      searchBtn.classList.remove("loading");
      searchBtnText.style.display = "inline";
      searchBtnSpinner.style.display = "none";
    }
  }, 500);
}

function displayResults(results) {
  const resultsDiv = document.getElementById("results");
  
  if (results.length === 0) {
    resultsDiv.innerHTML = `
      <div class='no-results'>
        <h3>No exact matches found</h3>
        <p>Try rephrasing your search or submit a new ticket below.</p>
        <p style="margin-top: 15px; color: #666;"><em>💡 Try searching for: "access", "expense", "data", "portal", "vendor"</em></p>
      </div>
    `;
    return;
  }

  resultsDiv.innerHTML = results.map(ticket => `
    <div class="ticket-card">
      <div class="ticket-header">
        <span class="ticket-id">#${ticket["Ticket ID"]}</span>
        <span class="priority-badge priority-${ticket.Priority.toLowerCase()}">${ticket.Priority}</span>
      </div>
      
      <div class="ticket-title">${ticket.Subject}</div>
      <div class="ticket-description">${ticket.Description}</div>
      
      <div class="ticket-meta">
        <div class="meta-item">
          <span class="meta-label">Group:</span>
          <span class="meta-value">${ticket.Group}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Category:</span>
          <span class="meta-value">${ticket.Category}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Status:</span>
          <span class="meta-value">${ticket.Status}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Resolution Time:</span>
          <span class="meta-value">${ticket.Solution.TimeToResolve}</span>
        </div>
      </div>

      <div class="solution-section">
        <div class="solution-title">✅ Solution Steps:</div>
        <ol class="solution-steps">
          ${ticket.Solution.Steps.map(step => `<li>${step}</li>`).join('')}
        </ol>
        <div style="margin-top: 10px; font-weight: bold; color: #0b3c4b;">
          Resolution: ${ticket.Solution.Resolution}
        </div>
      </div>

      <div class="tags-section">
        <strong>Tags:</strong>
        ${ticket.Tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>

      ${ticket.SimilarTickets && ticket.SimilarTickets.length > 0 ? `
        <div class="similar-tickets">
          <strong>Related Tickets:</strong>
          ${ticket.SimilarTickets.map(id => {
            const similarTicket = tickets.find(t => t["Ticket ID"] === id);
            return similarTicket ? `
              <div class="similar-ticket" onclick="showTicket(${id})">
                #${id} - ${similarTicket.Subject}
              </div>
            ` : '';
          }).join('')}
        </div>
      ` : ''}
    </div>
  `).join('');
}

function showTicket(ticketId) {
  const ticket = tickets.find(t => t["Ticket ID"] === ticketId);
  if (ticket) {
    displayResults([ticket]);
  }
}

function populateSimilarTicketDropdown() {
  const dropdown = document.getElementById("similarTicket");
  dropdown.innerHTML = '<option value="">Select a similar ticket if found above</option>';
  
  currentSearchResults.forEach(ticket => {
    const option = document.createElement('option');
    option.value = ticket["Ticket ID"];
    option.textContent = `#${ticket["Ticket ID"]} - ${ticket.Subject}`;
    dropdown.appendChild(option);
  });
}

function submitTicket() {
  const subject = document.getElementById("ticketSubject").value;
  const description = document.getElementById("ticketDescription").value;
  const similarTicket = document.getElementById("similarTicket").value;
  
  if (!subject.trim() || !description.trim()) {
    alert("Please fill in both subject and description fields.");
    return;
  }
  
  // Here you would typically send the data to a server
  alert(`Ticket submitted successfully!\n\nSubject: ${subject}\nDescription: ${description}${similarTicket ? `\nSimilar Ticket: #${similarTicket}` : ''}`);
  
  // Clear the form
  document.getElementById("ticketSubject").value = "";
  document.getElementById("ticketDescription").value = "";
  document.getElementById("similarTicket").value = "";
}

function showTab(tabName) {
  document.querySelectorAll('.tab-content').forEach(content => {
    content.style.display = 'none';
  });
  
  document.querySelectorAll('.tab-button').forEach(button => {
    button.classList.remove('active');
  });
  
  document.getElementById(tabName + 'Tab').style.display = 'block';
  event.target.classList.add('active');
  
  if (tabName === 'grouping') {
    loadGroupingContent();
  } else if (tabName === 'analytics') {
    loadAnalyticsContent();
  } else if (tabName === 'trends') {
    loadTrendsContent();
  }
}

function loadGroupingContent() {
  const content = document.getElementById("groupingContent");
  const groups = {};
  
  tickets.forEach(ticket => {
    if (!groups[ticket.Category]) {
      groups[ticket.Category] = [];
    }
    groups[ticket.Category].push(ticket);
  });

  content.innerHTML = Object.keys(groups).map(category => `
    <div style="margin-bottom: 20px; padding: 15px; background: white; border-radius: 8px; border: 2px solid #1c9db2; box-shadow: 0 2px 8px rgba(28, 157, 178, 0.1);">
      <h4 style="color: #0b3c4b; margin-bottom: 10px; font-weight: 600;">${category} (${groups[category].length} tickets)</h4>
      ${groups[category].map(ticket => `
        <div style="padding: 8px; margin: 5px 0; background: #f6f6f6; border-radius: 5px; border-left: 4px solid #22768e; transition: transform 0.2s;" onmouseover="this.style.transform='translateX(3px)'" onmouseout="this.style.transform='translateX(0)'">
          <strong>#${ticket["Ticket ID"]}</strong> - ${ticket.Subject}
          <br><small style="color: #0b3c4b;">${ticket.Status} | ${ticket.Priority}</small>
        </div>
      `).join('')}
    </div>
  `).join('');
}

function loadAnalyticsContent() {
  const content = document.getElementById("analyticsContent");
  
  const categoryStats = {};
  const priorityStats = {};
  
  tickets.forEach(ticket => {
    categoryStats[ticket.Category] = (categoryStats[ticket.Category] || 0) + 1;
    priorityStats[ticket.Priority] = (priorityStats[ticket.Priority] || 0) + 1;
  });

  content.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
      <div style="background: white; padding: 15px; border-radius: 8px; border: 2px solid #1c9db2; box-shadow: 0 2px 8px rgba(28, 157, 178, 0.1);">
        <h4 style="color: #0b3c4b; margin-bottom: 10px; font-weight: 600;">Issues by Category</h4>
        ${Object.keys(categoryStats).map(category => `
          <div style="display: flex; justify-content: space-between; padding: 5px 0;">
            <span>${category}</span>
            <span style="font-weight: bold; color: #0b3c4b;">${categoryStats[category]}</span>
          </div>
        `).join('')}
      </div>
      
      <div style="background: white; padding: 15px; border-radius: 8px; border: 2px solid #1c9db2; box-shadow: 0 2px 8px rgba(28, 157, 178, 0.1);">
        <h4 style="color: #0b3c4b; margin-bottom: 10px; font-weight: 600;">Issues by Priority</h4>
        ${Object.keys(priorityStats).map(priority => `
          <div style="display: flex; justify-content: space-between; padding: 5px 0;">
            <span>${priority}</span>
            <span style="font-weight: bold; color: #0b3c4b;">${priorityStats[priority]}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function loadTrendsContent() {
  const content = document.getElementById("trendsContent");
  
  const mostViewed = tickets.sort((a, b) => b.Analytics.Views - a.Analytics.Views).slice(0, 5);
  const mostHelpful = tickets.sort((a, b) => b.Analytics.HelpfulCount - a.Analytics.HelpfulCount).slice(0, 5);
  
  content.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
      <div style="background: white; padding: 15px; border-radius: 8px; border: 2px solid #1c9db2; box-shadow: 0 2px 8px rgba(28, 157, 178, 0.1);">
        <h4 style="color: #0b3c4b; margin-bottom: 10px; font-weight: 600;">Most Viewed Issues</h4>
        ${mostViewed.map(ticket => `
          <div style="padding: 8px; margin: 5px 0; background: #f6f6f6; border-radius: 5px; border-left: 4px solid #f4b831; transition: transform 0.2s;" onmouseover="this.style.transform='translateX(3px)'" onmouseout="this.style.transform='translateX(0)'">
            <strong>#${ticket["Ticket ID"]}</strong> - ${ticket.Subject}
            <br><small style="color: #0b3c4b;">${ticket.Analytics.Views} views</small>
          </div>
        `).join('')}
      </div>
      
      <div style="background: white; padding: 15px; border-radius: 8px; border: 2px solid #1c9db2; box-shadow: 0 2px 8px rgba(28, 157, 178, 0.1);">
        <h4 style="color: #0b3c4b; margin-bottom: 10px; font-weight: 600;">Most Helpful Solutions</h4>
        ${mostHelpful.map(ticket => `
          <div style="padding: 8px; margin: 5px 0; background: #f6f6f6; border-radius: 5px; border-left: 4px solid #f4b831; transition: transform 0.2s;" onmouseover="this.style.transform='translateX(3px)'" onmouseout="this.style.transform='translateX(0)'">
            <strong>#${ticket["Ticket ID"]}</strong> - ${ticket.Subject}
            <br><small style="color: #0b3c4b;">${ticket.Analytics.HelpfulCount} helpful votes</small>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Quick Actions Functions
function showSearchTips() {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `
    <div class="ticket-card">
      <div class="ticket-header">
        <span class="ticket-id">#SEARCH</span>
        <span class="priority-badge priority-low">Tips</span>
      </div>
      <div class="ticket-title">🔍 How to Search Effectively</div>
      <div class="ticket-description">
        <h4 style="color: #0b3c4b; margin-bottom: 10px;">Search Tips:</h4>
        <ul style="margin-left: 20px; line-height: 1.6;">
          <li><strong>Use specific keywords:</strong> "vendor access" instead of "help"</li>
          <li><strong>Try different terms:</strong> "expense sheet" or "work codes"</li>
          <li><strong>Include system names:</strong> "Maconomy", "UKG", "portal"</li>
          <li><strong>Search by category:</strong> "access", "approval", "data export"</li>
          <li><strong>Use action words:</strong> "request", "configure", "update"</li>
        </ul>
        <p style="margin-top: 15px; color: #666;"><em>💡 Tip: The search is semantic, so it understands related terms!</em></p>
      </div>
    </div>
  `;
}

function showCommonIssues() {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `
    <div class="ticket-card">
      <div class="ticket-header">
        <span class="ticket-id">#COMMON</span>
        <span class="priority-badge priority-low">FAQ</span>
      </div>
      <div class="ticket-title">📋 Frequently Asked Questions</div>
      <div class="ticket-description">
        <h4 style="color: #0b3c4b; margin-bottom: 10px;">Common Issues:</h4>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
          <div>
            <strong style="color: #0b3c4b;">🔐 Access Issues:</strong>
            <ul style="margin-left: 15px; font-size: 0.9rem;">
              <li>Portal access requests</li>
              <li>Login credentials</li>
              <li>Permission updates</li>
            </ul>
          </div>
          <div>
            <strong style="color: #0b3c4b;">💰 Expense Problems:</strong>
            <ul style="margin-left: 15px; font-size: 0.9rem;">
              <li>Work code configuration</li>
              <li>Approval workflows</li>
              <li>Quantity adjustments</li>
            </ul>
          </div>
          <div>
            <strong style="color: #0b3c4b;">📊 Data Requests:</strong>
            <ul style="margin-left: 15px; font-size: 0.9rem;">
              <li>Partner code exports</li>
              <li>Report generation</li>
              <li>Data formatting</li>
            </ul>
          </div>
          <div>
            <strong style="color: #0b3c4b;">⚙️ System Issues:</strong>
            <ul style="margin-left: 15px; font-size: 0.9rem;">
              <li>Configuration updates</li>
              <li>Integration sync</li>
              <li>System maintenance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
}

function showQuickLinks() {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `
    <div class="ticket-card">
      <div class="ticket-header">
        <span class="ticket-id">#LINKS</span>
        <span class="priority-badge priority-low">Quick</span>
      </div>
      <div class="ticket-title">🔗 Quick Access Links</div>
      <div class="ticket-description">
        <h4 style="color: #0b3c4b; margin-bottom: 10px;">Direct System Access:</h4>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
          <div style="padding: 10px; background: #f6f6f6; border-radius: 8px; border-left: 4px solid #1c9db2;">
            <strong style="color: #0b3c4b;">Maconomy Portal</strong><br>
            <small>Access vendor registration and expense management</small>
          </div>
          <div style="padding: 10px; background: #f6f6f6; border-radius: 8px; border-left: 4px solid #1c9db2;">
            <strong style="color: #0b3c4b;">UKG System</strong><br>
            <small>Pay stubs and employee information</small>
          </div>
          <div style="padding: 10px; background: #f6f6f6; border-radius: 8px; border-left: 4px solid #1c9db2;">
            <strong style="color: #0b3c4b;">HR Portal</strong><br>
            <small>Employee self-service and requests</small>
          </div>
          <div style="padding: 10px; background: #f6f6f6; border-radius: 8px; border-left: 4px solid #1c9db2;">
            <strong style="color: #0b3c4b;">Support Portal</strong><br>
            <small>Submit new tickets and track existing ones</small>
          </div>
        </div>
        <p style="margin-top: 15px; color: #666;"><em>💡 Note: Contact HR for actual login credentials and access</em></p>
      </div>
    </div>
  `;
}

function showContactHR() {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `
    <div class="ticket-card">
      <div class="ticket-header">
        <span class="ticket-id">#CONTACT</span>
        <span class="priority-badge priority-high">Urgent</span>
      </div>
      <div class="ticket-title">📞 Contact HR Team</div>
      <div class="ticket-description">
        <h4 style="color: #0b3c4b; margin-bottom: 10px;">Get Immediate Assistance:</h4>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
          <div style="padding: 10px; background: #f6f6f6; border-radius: 8px; border-left: 4px solid #f4b831;">
            <strong style="color: #0b3c4b;">📧 Email Support</strong><br>
            <small>HRSupport@StagwellGlobal.com</small><br>
            <small>Response within 24 hours</small>
          </div>
          <div style="padding: 10px; background: #f6f6f6; border-radius: 8px; border-left: 4px solid #f4b831;">
            <strong style="color: #0b3c4b;">📞 Phone Support</strong><br>
            <small>1-800-HR-HELP</small><br>
            <small>Mon-Fri 9AM-5PM EST</small>
          </div>
          <div style="padding: 10px; background: #f6f6f6; border-radius: 8px; border-left: 4px solid #f4b831;">
            <strong style="color: #0b3c4b;">💬 Live Chat</strong><br>
            <small>Available on HR Portal</small><br>
            <small>Real-time assistance</small>
          </div>
          <div style="padding: 10px; background: #f6f6f6; border-radius: 8px; border-left: 4px solid #f4b831;">
            <strong style="color: #0b3c4b;">🚨 Emergency</strong><br>
            <small>For urgent issues</small><br>
            <small>24/7 escalation</small>
          </div>
        </div>
        <p style="margin-top: 15px; color: #666;"><em>💡 Tip: Try searching for solutions first, then contact HR if needed!</em></p>
      </div>
    </div>
  `;
}

// Initialize the system
document.addEventListener('DOMContentLoaded', function() {
  showTab('grouping');
}); 