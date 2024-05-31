document.addEventListener('DOMContentLoaded', () => {
    const outputElement = document.getElementById('output');
    const inputElement = document.getElementById('command-input');
    const prompt = '$ ';

    const typeEffect = (element, text, callback) => {
        let i = 0;
        const interval = setInterval(() => {
            element.textContent += text.charAt(i);
            i++;
            if (i === text.length) {
                clearInterval(interval);
                callback();
            }
        }, 2); // Faster typing effect
    };

    const displayCommandResult = (command) => {
        if (command === 'about') {
            outputElement.innerHTML = '';
            const aboutText = 'This is a simple terminal-style website created using HTML, CSS, and JavaScript.\nProject: https://github.com/mrk-im/mrk-im';
            const aboutElement = document.createElement('div');
            typeEffect(aboutElement, aboutText, () => {});
            outputElement.appendChild(aboutElement);
        } else if (command === 'contact') {
            outputElement.innerHTML = '';
            const contactText = 'Contact Information:\nEmail: www@mrk.im\nGithub: https://github.com/mrk-im';
            const contactElement = document.createElement('div');
            typeEffect(contactElement, contactText, () => {});
            outputElement.appendChild(contactElement);
        } else if (command === 'clear') {
            outputElement.innerHTML = '';
        } else if (command === 'help') {
            outputElement.innerHTML = '';
            const helpText = 'Available commands:\n- about: Display information about the website\n- contact: Display contact information\n- clear: Clear the terminal\n- help: Display this help message';
            const helpElement = document.createElement('div');
            typeEffect(helpElement, helpText, () => {});
            outputElement.appendChild(helpElement); 
        } else if (command === 'su root') {
            outputElement.innerHTML = '';
            const suText = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
            const suElement = document.createElement('div');
            typeEffect(suElement, suText, () => {});
            outputElement.appendChild(suElement);
        } else {
            const errorText = `${command}: command not found`;
            const errorElement = document.createElement('div');
            typeEffect(errorElement, errorText, () => {});
            outputElement.appendChild(errorElement);
        }
    };

    const handleCommand = (command) => {
        const commandElement = document.createElement('div');
        commandElement.textContent = `${prompt}${command}`;
        outputElement.appendChild(commandElement);
        inputElement.value = '';
        displayCommandResult(command);
    };

    const initialMessage = '';
    const initialMessageElement = document.createElement('div');
    typeEffect(initialMessageElement, initialMessage, () => {
        inputElement.focus();
    });
    outputElement.appendChild(initialMessageElement);

    inputElement.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const command = inputElement.value.trim();
            if (command) {
                handleCommand(command);
            }
        }
    });
});
