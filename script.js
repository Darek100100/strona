document.addEventListener("DOMContentLoaded", () => {
    const languageSwitcher = document.getElementById('language-switcher');

    const content = {
        en: {
            profile: "I am a technology enthusiast with an education in computer science.<br>My passion for modern solutions drives me to constantly search for and implement innovative ideas that can improve existing processes.<br>I possess a deep analytical view of the world, which allows me to effectively evaluate and interpret data from various perspectives.<br>In my professional work, I focus on data analysis and information processing, using advanced tools and techniques<br>to transform raw data into valuable insights that support business decision-making.<br>",
            experience: "Collecting data from various sources, including databases, reports, and other materials.<br>Processing data and performing statistical analysis to identify patterns and significant correlations.<br>Creating reports, presentations, and charts that showcase the results of data analysis.<br>Presenting the findings, providing reliable data and analysis. Advising based on the results of data analysis.<br>Monitoring and controlling the quality of data, including identifying errors and ensuring data consistency and completeness.<br>Collaborating with other departments within the company to understand business needs and provide relevant and understandable analyses.<br>Experience in working as an analyst or in a related position.<br>Knowledge of data analysis tools and techniques, such as SQL, Excel, Python, Power BI, etc.<br>Ability to interpret data and draw business conclusions. Excellent analytical and logical thinking skills.<br>Communicative and capable of presenting data effectively."
        },
        pl: {
            profile: "Jestem entuzjastą technologii z wykształceniem w dziedzinie informatyki.<br>Moja pasja do nowoczesnych rozwiązań napędza mnie do ciągłego poszukiwania i wdrażania innowacyjnych pomysłów, które mogą poprawić istniejące procesy.<br>Posiadam głębokie analityczne spojrzenie na świat, które pozwala mi skutecznie oceniać i interpretować dane z różnych perspektyw.<br>W swojej pracy zawodowej skupiam się na analizie danych i przetwarzaniu informacji, wykorzystując zaawansowane narzędzia i techniki<br>do przekształcania surowych danych w cenne informacje wspierające podejmowanie decyzji biznesowych.<br>",
            experience: "Zbieranie danych z różnych źródeł, w tym baz danych, raportów i innych materiałów.<br>Przetwarzanie danych i przeprowadzanie analizy statystycznej w celu zidentyfikowania wzorców i istotnych korelacji.<br>Tworzenie raportów, prezentacji i wykresów przedstawiających wyniki analizy danych.<br>Prezentowanie wyników, dostarczanie wiarygodnych danych i analiz. Doradzanie na podstawie wyników analizy danych.<br>Monitorowanie i kontrolowanie jakości danych, w tym identyfikowanie błędów i zapewnianie spójności i kompletności danych.<br>Współpraca z innymi działami w firmie w celu zrozumienia potrzeb biznesowych i dostarczania odpowiednich i zrozumiałych analiz.<br>Doświadczenie w pracy jako analityk lub na podobnym stanowisku.<br>Znajomość narzędzi i technik analizy danych, takich jak SQL, Excel, Python, Power BI, itp.<br>Umiejętność interpretacji danych i wyciągania wniosków biznesowych. Doskonałe umiejętności analityczne i logicznego myślenia.<br>Komunikatywność i umiejętność skutecznego prezentowania danych."
        }
    };

    languageSwitcher.addEventListener('change', (e) => {
        const selectedLanguage = e.target.value;
        document.getElementById('profile-text').innerHTML = content[selectedLanguage].profile;
        document.getElementById('experience-text').innerHTML = content[selectedLanguage].experience;
    });

    // Initial load
    document.getElementById('profile-text').innerHTML = content['en'].profile;
    document.getElementById('experience-text').innerHTML = content['en'].experience;
});
