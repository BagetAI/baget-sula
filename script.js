/* 
  Sula Interactive Script File
  Last updated: June 8, 2026
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Interactive Refill Demo ---
    const interactiveWax = document.getElementById('interactive-wax');
    const btnExtract = document.getElementById('btn-extract');
    const btnInsert = document.getElementById('btn-insert');

    if (btnExtract && btnInsert && interactiveWax) {
        btnExtract.addEventListener('click', () => {
            interactiveWax.classList.add('slid-out');
            btnExtract.style.display = 'none';
            setTimeout(() => {
                btnInsert.style.display = 'block';
            }, 300);
        });

        btnInsert.addEventListener('click', () => {
            interactiveWax.classList.remove('slid-out');
            btnInsert.style.display = 'none';
            setTimeout(() => {
                btnExtract.style.display = 'block';
            }, 300);
        });
    }

    // --- 2. Interactive Scent Voting ---
    const voteButtons = document.querySelectorAll('.vote-btn');
    
    voteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const countSpan = button.querySelector('.vote-count');
            const parentCard = button.closest('.scent-vote-card');
            const scentName = parentCard ? parentCard.getAttribute('data-scent') : '';
            
            // Extract current numeric count
            let currentCount = parseInt(countSpan.textContent) || 0;
            
            // Prevent multiple voting session limit using localStorage
            if (localStorage.getItem(`voted_scent_${scentName}`)) {
                button.innerHTML = `<span>Already Voted</span><span class="vote-count">${currentCount} votes</span>`;
                button.style.backgroundColor = '#7A8B7B';
                button.style.borderColor = '#7A8B7B';
                button.style.color = '#FFFFFF';
                return;
            }
            
            // Increment
            currentCount += 1;
            localStorage.setItem(`voted_scent_${scentName}`, 'true');
            
            // Visual Feedback
            button.classList.add('voted');
            button.innerHTML = `<span>Voted!</span><span class="vote-count">${currentCount} votes</span>`;
            button.style.backgroundColor = '#C15C3D';
            button.style.borderColor = '#C15C3D';
            button.style.color = '#FFFFFF';
        });
    });

    // --- 3. Form Submissions ---
    const forms = [
        { formId: 'waitlist-form', msgId: 'form-message', emailId: 'email' },
        { formId: 'waitlist-form-bottom', msgId: 'form-message-bottom', emailId: 'email-bottom' }
    ];

    forms.forEach(({ formId, msgId, emailId }) => {
        const formElement = document.getElementById(formId);
        if (formElement) {
            formElement.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const emailInput = document.getElementById(emailId);
                const messageBox = document.getElementById(msgId);
                const submitBtn = formElement.querySelector('button[type="submit"]');
                
                if (!emailInput || !messageBox) return;

                const emailValue = emailInput.value.trim();
                
                // Show loading state
                messageBox.style.display = 'block';
                messageBox.className = 'form-message';
                messageBox.textContent = 'Submitting your reservation...';
                if (submitBtn) {
                    submitBtn.disabled = true;
                }

                try {
                    // API Call to Baget legacy leads endpoint
                    const response = await fetch('https://app.baget.ai/api/leads', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            companyId: '8db76acd-887c-4ffe-b818-043a5b8b6457',
                            email: emailValue,
                            name: ''
                        })
                    });

                    if (response.ok) {
                        messageBox.className = 'form-message success';
                        messageBox.textContent = 'Thank you! Your VIP launch priority has been reserved.';
                        emailInput.value = '';
                    } else {
                        throw new Error('Server responded with an error status.');
                    }
                } catch (error) {
                    console.error('Waitlist submission error:', error);
                    messageBox.className = 'form-message error';
                    messageBox.textContent = 'Unable to submit at this time. Please try again soon.';
                } finally {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                    }
                }
            });
        }
    });
});