document.addEventListener('DOMContentLoaded', () => {
    // Translations
    const translations = {
        en: {
            appTitle: "Don't Break The Chain",
            darkTheme: "Dark Theme",
            lightTheme: "Light Theme",
            days: {
                mon: "Mon",
                tue: "Tue",
                wed: "Wed",
                thu: "Thu",
                fri: "Fri",
                sat: "Sat",
                sun: "Sun"
            },
            months: [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ],
            currentStreak: "Current Streak",
            longestStreak: "Longest Streak",
            totalDays: "Total Days"
        },
        tr: {
            appTitle: "Zinciri Kırma",
            darkTheme: "Karanlık Tema",
            lightTheme: "Aydınlık Tema",
            days: {
                mon: "Pzt",
                tue: "Sal",
                wed: "Çar",
                thu: "Per",
                fri: "Cum",
                sat: "Cmt",
                sun: "Paz"
            },
            months: [
                "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
                "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
            ],
            currentStreak: "Mevcut Zincir",
            longestStreak: "En Uzun Zincir",
            totalDays: "Toplam Gün"
        },
        es: {
            appTitle: "No Rompas La Cadena",
            darkTheme: "Tema Oscuro",
            lightTheme: "Tema Claro",
            days: {
                mon: "Lun",
                tue: "Mar",
                wed: "Mié",
                thu: "Jue",
                fri: "Vie",
                sat: "Sáb",
                sun: "Dom"
            },
            months: [
                "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
            ],
            currentStreak: "Racha Actual",
            longestStreak: "Racha más Larga",
            totalDays: "Días Totales"
        },
        zh: {
            appTitle: "不要打破链条",
            darkTheme: "深色主题",
            lightTheme: "浅色主题",
            days: {
                mon: "周一",
                tue: "周二",
                wed: "周三",
                thu: "周四",
                fri: "周五",
                sat: "周六",
                sun: "周日"
            },
            months: [
                "一月", "二月", "三月", "四月", "五月", "六月",
                "七月", "八月", "九月", "十月", "十一月", "十二月"
            ],
            currentStreak: "当前连续",
            longestStreak: "最长连续",
            totalDays: "总天数"
        },
        hi: {
            appTitle: "श्रृंखला मत तोड़ो",
            darkTheme: "डार्क थीम",
            lightTheme: "लाइट थीम",
            days: {
                mon: "सोम",
                tue: "मंगल",
                wed: "बुध",
                thu: "गुरु",
                fri: "शुक्र",
                sat: "शनि",
                sun: "रवि"
            },
            months: [
                "जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून",
                "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"
            ],
            currentStreak: "वर्तमान स्ट्रीक",
            longestStreak: "सबसे लंबी स्ट्रीक",
            totalDays: "कुल दिन"
        },
        fr: {
            appTitle: "Ne Brisez Pas La Chaîne",
            darkTheme: "Thème Sombre",
            lightTheme: "Thème Clair",
            days: {
                mon: "Lun",
                tue: "Mar",
                wed: "Mer",
                thu: "Jeu",
                fri: "Ven",
                sat: "Sam",
                sun: "Dim"
            },
            months: [
                "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
                "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
            ],
            currentStreak: "Série Actuelle",
            longestStreak: "Série la Plus Longue",
            totalDays: "Jours Totaux"
        },
        ar: {
            appTitle: "لا تكسر السلسلة",
            darkTheme: "مظهر داكن",
            lightTheme: "مظهر فاتح",
            days: {
                mon: "الإثنين",
                tue: "الثلاثاء",
                wed: "الأربعاء",
                thu: "الخميس",
                fri: "الجمعة",
                sat: "السبت",
                sun: "الأحد"
            },
            months: [
                "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
                "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
            ],
            currentStreak: "التتابع الحالي",
            longestStreak: "أطول تتابع",
            totalDays: "إجمالي الأيام"
        },
        ru: {
            appTitle: "Не Разрывай Цепь",
            darkTheme: "Темная Тема",
            lightTheme: "Светлая Тема",
            days: {
                mon: "Пн",
                tue: "Вт",
                wed: "Ср",
                thu: "Чт",
                fri: "Пт",
                sat: "Сб",
                sun: "Вс"
            },
            months: [
                "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
                "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
            ],
            currentStreak: "Текущая Серия",
            longestStreak: "Самая Длинная Серия",
            totalDays: "Всего Дней"
        },
        pt: {
            appTitle: "Não Quebre a Corrente",
            darkTheme: "Tema Escuro",
            lightTheme: "Tema Claro",
            days: {
                mon: "Seg",
                tue: "Ter",
                wed: "Qua",
                thu: "Qui",
                fri: "Sex",
                sat: "Sáb",
                sun: "Dom"
            },
            months: [
                "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
                "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
            ],
            currentStreak: "Sequência Atual",
            longestStreak: "Sequência mais Longa",
            totalDays: "Total de Dias"
        },
        ja: {
            appTitle: "チェーンを切らないで",
            darkTheme: "ダークテーマ",
            lightTheme: "ライトテーマ",
            days: {
                mon: "月",
                tue: "火",
                wed: "水",
                thu: "木",
                fri: "金",
                sat: "土",
                sun: "日"
            },
            months: [
                "1月", "2月", "3月", "4月", "5月", "6月",
                "7月", "8月", "9月", "10月", "11月", "12月"
            ],
            currentStreak: "現在の連続",
            longestStreak: "最長の連続",
            totalDays: "合計日数"
        },
        de: {
            appTitle: "Brich die Kette Nicht",
            darkTheme: "Dunkles Thema",
            lightTheme: "Helles Thema",
            days: {
                mon: "Mo",
                tue: "Di",
                wed: "Mi",
                thu: "Do",
                fri: "Fr",
                sat: "Sa",
                sun: "So"
            },
            months: [
                "Januar", "Februar", "März", "April", "Mai", "Juni",
                "Juli", "August", "September", "Oktober", "November", "Dezember"
            ],
            currentStreak: "Aktuelle Serie",
            longestStreak: "Längste Serie",
            totalDays: "Gesamttage"
        },
        ko: {
            appTitle: "체인을 끊지 마세요",
            darkTheme: "다크 테마",
            lightTheme: "라이트 테마",
            days: {
                mon: "월",
                tue: "화",
                wed: "수",
                thu: "목",
                fri: "금",
                sat: "토",
                sun: "일"
            },
            months: [
                "1월", "2월", "3월", "4월", "5월", "6월",
                "7월", "8월", "9월", "10월", "11월", "12월"
            ],
            currentStreak: "현재 연속",
            longestStreak: "가장 긴 연속",
            totalDays: "총 일수"
        }
    };

    // Language variables
    let currentLanguage = loadLanguage();

    // Language selection
    const languageSelect = document.getElementById('language-select');
    languageSelect.value = currentLanguage;

    languageSelect.addEventListener('change', () => {
        currentLanguage = languageSelect.value;
        saveLanguage(currentLanguage);
        updateLanguage();
        generateCalendar(currentMonth, currentYear);
    });

    // Theme switching
    const themeToggle = document.getElementById('theme-toggle');
    const themeLabel = document.getElementById('theme-label');
    
    // Get theme setting from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.replace('light-theme', 'dark-theme');
        themeToggle.checked = true;
        themeLabel.textContent = translations[currentLanguage].lightTheme;
    } else {
        document.body.classList.replace('dark-theme', 'light-theme');
        themeLabel.textContent = translations[currentLanguage].darkTheme;
    }
    
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            document.body.classList.replace('light-theme', 'dark-theme');
            localStorage.setItem('theme', 'dark');
            themeLabel.textContent = translations[currentLanguage].lightTheme;
        } else {
            document.body.classList.replace('dark-theme', 'light-theme');
            localStorage.setItem('theme', 'light');
            themeLabel.textContent = translations[currentLanguage].darkTheme;
        }
    });
    
    // Calendar variables
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    
    // Track marked days
    let markedDays = loadMarkedDays();
    
    // Update language texts
    updateLanguage();
    
    // Generate calendar
    generateCalendar(currentMonth, currentYear);
    updateStats();
    
    // Previous month button
    document.getElementById('prev-month').addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        generateCalendar(currentMonth, currentYear);
    });
    
    // Next month button
    document.getElementById('next-month').addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        generateCalendar(currentMonth, currentYear);
    });
    
    // Function to update texts
    function updateLanguage() {
        document.getElementById('app-title').textContent = translations[currentLanguage].appTitle;
        document.title = translations[currentLanguage].appTitle;
        
        // Days of the week
        document.getElementById('day-mon').textContent = translations[currentLanguage].days.mon;
        document.getElementById('day-tue').textContent = translations[currentLanguage].days.tue;
        document.getElementById('day-wed').textContent = translations[currentLanguage].days.wed;
        document.getElementById('day-thu').textContent = translations[currentLanguage].days.thu;
        document.getElementById('day-fri').textContent = translations[currentLanguage].days.fri;
        document.getElementById('day-sat').textContent = translations[currentLanguage].days.sat;
        document.getElementById('day-sun').textContent = translations[currentLanguage].days.sun;
        
        // Statistics labels
        document.getElementById('current-streak-label').textContent = translations[currentLanguage].currentStreak;
        document.getElementById('longest-streak-label').textContent = translations[currentLanguage].longestStreak;
        document.getElementById('total-days-label').textContent = translations[currentLanguage].totalDays;
        
        // Theme label
        const isDarkTheme = document.body.classList.contains('dark-theme');
        themeLabel.textContent = isDarkTheme ? 
            translations[currentLanguage].lightTheme : 
            translations[currentLanguage].darkTheme;
    }
    
    // Function to generate calendar
    function generateCalendar(month, year) {
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const calendarDays = document.getElementById('calendar-days');
        const monthYearText = document.getElementById('month-year');
        
        // Month and year text
        monthYearText.textContent = `${translations[currentLanguage].months[month]} ${year}`;
        
        // Clear calendar
        calendarDays.innerHTML = '';
        
        // Add last days of previous month
        let day = 1;
        let prevMonthDays = new Date(year, month, 0).getDate();
        let dayOfWeek = firstDay === 0 ? 6 : firstDay - 1; // For Monday start
        
        for (let i = dayOfWeek; i > 0; i--) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day', 'other-month');
            dayElement.textContent = prevMonthDays - i + 1;
            calendarDays.appendChild(dayElement);
        }
        
        // Add days
        for (let i = 1; i <= daysInMonth; i++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.textContent = i;
            
            const dateStr = formatDate(year, month, i);
            
            // Highlight today
            const today = new Date();
            if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                dayElement.classList.add('today');
            }
            
            // Check marked days
            if (markedDays.includes(dateStr)) {
                dayElement.classList.add('marked');
            }
            
            // Day click event
            dayElement.addEventListener('click', () => {
                toggleDay(dateStr, dayElement);
            });
            
            calendarDays.appendChild(dayElement);
            day++;
        }
        
        // Add first days of next month
        const totalCells = 42; // 6 rows x 7 columns
        const remainingCells = totalCells - (dayOfWeek + daysInMonth);
        
        for (let i = 1; i <= remainingCells; i++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day', 'other-month');
            dayElement.textContent = i;
            calendarDays.appendChild(dayElement);
        }
    }
    
    // Sound object
    const dingSound = new Audio('ding.wav');

    // Mark/unmark day
    function toggleDay(dateStr, dayElement) {
        const index = markedDays.indexOf(dateStr);
        
        if (index === -1) {
            // Mark
            markedDays.push(dateStr);
            dayElement.classList.add('marked');
            
            // Play sound
            dingSound.currentTime = 0; // Restart sound
            dingSound.play().catch(e => console.log("Sound could not be played:", e));
        } else {
            // Unmark
            markedDays.splice(index, 1);
            dayElement.classList.remove('marked');
        }
        
        // Save to localStorage
        saveMarkedDays();
        
        // Update statistics
        updateStats();
    }
    
    // Date format: YYYY-MM-DD
    function formatDate(year, month, day) {
        return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    }
    
    // Save marked days to localStorage
    function saveMarkedDays() {
        localStorage.setItem('markedDays', JSON.stringify(markedDays));
    }
    
    // Load marked days from localStorage
    function loadMarkedDays() {
        const saved = localStorage.getItem('markedDays');
        return saved ? JSON.parse(saved) : [];
    }
    
    // Save language setting to localStorage
    function saveLanguage(language) {
        localStorage.setItem('language', language);
    }
    
    // Load language setting from localStorage
    function loadLanguage() {
        const saved = localStorage.getItem('language');
        return saved || 'en'; // English by default
    }
    
    // Update statistics
    function updateStats() {
        const currentStreakElement = document.getElementById('current-streak');
        const longestStreakElement = document.getElementById('longest-streak');
        const totalDaysElement = document.getElementById('total-days');
        
        // Sort markedDays to calculate chains
        const sortedDays = [...markedDays].sort();
        
        // Total marked days
        totalDaysElement.textContent = markedDays.length;
        
        // Calculate chain lengths
        if (sortedDays.length === 0) {
            currentStreakElement.textContent = '0';
            longestStreakElement.textContent = '0';
            return;
        }
        
        // Current chain
        const today = formatDate(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDate()
        );
        const yesterday = formatDate(
            new Date(new Date().setDate(new Date().getDate() - 1)).getFullYear(),
            new Date(new Date().setDate(new Date().getDate() - 1)).getMonth(),
            new Date(new Date().setDate(new Date().getDate() - 1)).getDate()
        );
        
        let currentStreak = 0;
        
        // If today is marked
        if (markedDays.includes(today)) {
            currentStreak = 1;
            let prevDate = yesterday;
            let daysBack = 2;
            
            // Check consecutive days backwards
            while (markedDays.includes(prevDate)) {
                currentStreak++;
                prevDate = formatDate(
                    new Date(new Date().setDate(new Date().getDate() - daysBack)).getFullYear(),
                    new Date(new Date().setDate(new Date().getDate() - daysBack)).getMonth(),
                    new Date(new Date().setDate(new Date().getDate() - daysBack)).getDate()
                );
                daysBack++;
            }
        } else if (markedDays.includes(yesterday)) {
            // If yesterday is marked but today is not
            currentStreak = 1;
            let prevDate = formatDate(
                new Date(new Date().setDate(new Date().getDate() - 2)).getFullYear(),
                new Date(new Date().setDate(new Date().getDate() - 2)).getMonth(),
                new Date(new Date().setDate(new Date().getDate() - 2)).getDate()
            );
            let daysBack = 3;
            
            // Check consecutive days backwards
            while (markedDays.includes(prevDate)) {
                currentStreak++;
                prevDate = formatDate(
                    new Date(new Date().setDate(new Date().getDate() - daysBack)).getFullYear(),
                    new Date(new Date().setDate(new Date().getDate() - daysBack)).getMonth(),
                    new Date(new Date().setDate(new Date().getDate() - daysBack)).getDate()
                );
                daysBack++;
            }
        }
        
        currentStreakElement.textContent = currentStreak;
        
        // Longest chain
        let longestStreak = 0;
        let currentChain = 0;
        let prevDate = null;
        
        for (const dateStr of sortedDays) {
            const currentDate = new Date(dateStr);
            
            if (prevDate === null) {
                currentChain = 1;
            } else {
                const prevDay = prevDate.getDate();
                const prevMonth = prevDate.getMonth();
                const prevYear = prevDate.getFullYear();
                
                const currDay = currentDate.getDate();
                const currMonth = currentDate.getMonth();
                const currYear = currentDate.getFullYear();
                
                // Check if it's the day after the previous day
                const oneDayLater = new Date(prevYear, prevMonth, prevDay + 1);
                
                if (
                    oneDayLater.getDate() === currDay &&
                    oneDayLater.getMonth() === currMonth &&
                    oneDayLater.getFullYear() === currYear
                ) {
                    currentChain++;
                } else {
                    currentChain = 1;
                }
            }
            
            if (currentChain > longestStreak) {
                longestStreak = currentChain;
            }
            
            prevDate = currentDate;
        }
        
        longestStreakElement.textContent = longestStreak;
    }
}); 