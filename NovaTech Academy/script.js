<script>
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');

        navToggle.addEventListener('click', () => {
            const open = navMenu.classList.toggle('is-open');
            navToggle.setAttribute('aria-expanded', open);
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('is-open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });

        <script>
document.addEventListener("DOMContentLoaded", () => {
    const chatWindow = document.getElementById("chat-window");
    const openChat = document.getElementById("open-chat");
    const closeChat = document.getElementById("close-chat");
    const sendBtn = document.getElementById("send-chat");
    const chatInput = document.getElementById("chat-input");
    const chatMessages = document.getElementById("chat-messages");

    openChat.onclick = () => {
        chatWindow.classList.remove("hidden");
        openChat.classList.add("hidden");
    };

    closeChat.onclick = () => {
        chatWindow.classList.add("hidden");
        openChat.classList.remove("hidden");
    };

    function addMessage(text, sender) {
        const div = document.createElement("div");

        div.className = sender === "user"
            ? "ml-auto max-w-[85%] rounded-xl bg-ink p-3 text-sm text-white"
            : "max-w-[85%] rounded-xl bg-accent-soft p-3 text-sm text-ink";

        div.textContent = text;
        chatMessages.appendChild(div);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getBotReply(message) {
        const msg = message.toLowerCase();

        if (msg.includes("course")) {
            return "We offer Cybersecurity Fundamentals, Ethical Hacking, and Advanced Security Techniques.";
        }

        if (msg.includes("price") || msg.includes("fee")) {
            return "Our course pricing depends on the program. Contact us for the latest fees.";
        }

        if (msg.includes("register") || msg.includes("signup") || msg.includes("join")) {
            return "Click the 'Next → Sign Up' button on the page to create your student account.";
        }

        if (msg.includes("contact") || msg.includes("phone")) {
            return "You can reach us on +234 816 371 5163.";
        }

        if (msg.includes("email")) {
            return "Email us at info@novatechacademy.com.";
        }

        if (msg.includes("hello") || msg.includes("hi")) {
            return "Hello! Welcome to NovaTech Cybersecurity Academy. How can I help you today?";
        }

        return "I can help with our courses, registration, contact information, and learning paths.";
    }

    function sendMessage() {
        const text = chatInput.value.trim();
        if (!text) return;

        addMessage(text, "user");
        chatInput.value = "";

        setTimeout(() => {
            addMessage(getBotReply(text), "bot");
        }, 500);
    }

    sendBtn.onclick = sendMessage;

    chatInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    });
});
</script>
    </script>