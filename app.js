document.getElementById('profile-form').addEventListener('submit', function(e) {
        e.preventDefault();

            const name = document.getElementById('name').value;
                const bio = document.getElementById('bio').value;
                    const skillsHave = document.getElementById('skills-have').value.split(',');
                        const skillsWant = document.getElementById('skills-want').value.split(',');

                            // For simplicity, we'll just log the profile data to the console
                                console.log({ name, bio, skillsHave, skillsWant });

                                    // Here, you could save the data to a server or localStorage
                                    });

                                    document.getElementById('search').addEventListener('input', function() {
                                        const query = this.value.toLowerCase();
                                            const results = document.getElementById('results');

                                                // Sample data
                                                    const users = [
                                                            { name: 'Alice', skillsHave: ['JavaScript'], skillsWant: ['Python'] },
                                                                    { name: 'Bob', skillsHave: ['Python'], skillsWant: ['JavaScript'] },
                                                                        ];

                                                                            const filteredUsers = users.filter(user =>
                                                                                    user.skillsHave.some(skill => skill.toLowerCase().includes(query))
                                                                                        );

                                                                                            results.innerHTML = filteredUsers.map(user => `
                                                                                                    <div>
                                                                                                                <h3>${user.name}</h3>
                                                                                                                            <p>Has: ${user.skillsHave.join(', ')}</p>
                                                                                                                                        <p>Wants: ${user.skillsWant.join(', ')}</p>
                                                                                                                                                </div>
                                                                                                                                                    `).join('');
                                                                                                                                                    });
                                                                                                                                                    
})