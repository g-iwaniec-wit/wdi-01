export type RuleContent = {
	text: string;
};

export type RuleImage = {
	src: string;
	alt: string;
	caption: string;
};

export type Rule = {
	number: number;
	title: string;
	content: RuleContent[];
	images: RuleImage[];
};

const createRule = (
	number: number,
	title: string,
	content: RuleContent[] = [],
	images: RuleImage[] = []
): Rule => ({ number, title, content, images });

export const defaultRuleNumber = 3;

export const getRuleTabId = (number: number) => `rule-tab-${number}`;

export const getRulePanelId = (number: number) => `rule-panel-${number}`;

export const rules = [
	createRule(
		1,
		'Widoczność stanu systemu',
		[
			{
				text: 'Interfejs powinien stale informować użytkownika o tym, co dzieje się w systemie. Każda ważna akcja powinna dawać szybką i zrozumiałą informację zwrotną: zapisano dane, trwa ładowanie, wystąpił problem albo operacja zakończyła się sukcesem. Dzięki temu użytkownik wie, jaki jest efekt jego działań i może pewniej zdecydować, co zrobić dalej.'
			},
			{
				text: 'Widoczność stanu buduje zaufanie do produktu. Dobry system nie zostawia użytkownika w niepewności: pokazuje postęp procesu, aktywny krok, aktualne zaznaczenie, status połączenia lub zmianę po kliknięciu. Informacja powinna pojawić się możliwie szybko, najlepiej natychmiast po wykonaniu akcji.'
			}
		],
		[
			{
				src: '/wdi-01/images/1.png',
				alt: 'Wskaźnik poziomu baterii w systemie macOS',
				caption:
					'Wskaźnik baterii w macOS jasno pokazuje aktualny stan urządzenia. Użytkownik od razu widzi, ile energii pozostało i może odpowiednio zareagować, na przykład podłączyć ładowarkę przed rozładowaniem komputera.'
			}
		]
	),
	createRule(
		2,
		'Dopasowanie systemu do świata rzeczywistego',
		[
			{
				text: 'System powinien mówić językiem użytkownika, a nie językiem wewnętrznych procesów, kodów czy specjalistycznego żargonu. Nazwy, komunikaty, ikony i kolejność informacji powinny odpowiadać temu, jak użytkownicy rozumieją dane zadanie w prawdziwym świecie.'
			},
			{
				text: 'Dobre dopasowanie pomaga szybciej nauczyć się interfejsu, bo elementy działają zgodnie z oczekiwaniami. Przykładem jest naturalne mapowanie: kontrolka znajduje się tam, gdzie użytkownik spodziewa się jej działania, a skutek jest zgodny z codziennym doświadczeniem. Projektant nie powinien zakładać, że jego własne słownictwo i model myślenia są takie same jak u odbiorców.'
			}
		],
		[
			{
				src: '/wdi-01/images/2.png',
				alt: 'Kompas w aplikacji odwzorowujący prawdziwy kompas',
				caption:
					'Kompas w aplikacji działa i wygląda podobnie do kompasu znanego z rzeczywistości. Dzięki temu użytkownik nie musi uczyć się nowego sposobu interpretowania kierunków, bo cyfrowy interfejs korzysta z dobrze znanego modelu.'
			}
		]
	),
	createRule(
		3,
		'Kontrola i swoboda użytkownika',
		[
			{
				text: 'Użytkownicy często wykonują czynności przez pomyłkę. Potrzebują wyraźnie oznaczonego wyjścia awaryjnego, aby opuścić niepożądaną czynność bez konieczności przechodzenia przez długotrwały proces. Wyjście powinno być łatwe do znalezienia i użycia. Każda akcja powinna zapewniać szybki powrót do poprzedniego stanu. Akcje zajmujące dużo czasu powinny mieć opcję anulowania, aby użytkownicy mogli zatrzymać proces, jeśli popełnią błąd lub zmienią zdanie.'
			}
		],
		[
			{
				src: '/wdi-01/images/undo_button.png',
				alt: 'Przykład funkcji "Cofnij" w edytorze tekstu',
				caption:
					'Funkcja "Cofnij" pozwala użytkownikom łatwo cofnąć ostatnią akcję, co jest kluczowe dla kontroli i swobody użytkownika. W przypadku przeglądarki internetowej, przycisk "Cofnij" umożliwia szybkie przywrócenie poprzedniej strony, co jest szczególnie przydatne, gdy użytkownik przypadkowo kliknie zły link lub wprowadzi niepożądane dane.'
			},
			{
				src: '/wdi-01/images/action_snackbar_undo.png',
				alt: 'Przykład przycisku "Undo" w aplikacji',
				caption:
					'Przycisk "Undo" umożliwia użytkownikom szybkie cofnięcie ostatniej akcji, co jest ważne dla kontroli i swobody użytkownika. W tym przypadku po usunięciu elementu pojawia się snackbar z opcją "Undo", pozwalającą na łatwe przywrócenie usuniętego elementu.'
			}
		]
	),
	createRule(
		4,
		'Spójność i standardy',
		[
			{
				text: 'Użytkownicy nie powinni zastanawiać się, czy różne słowa, sytuacje albo akcje oznaczają to samo. Interfejs powinien konsekwentnie używać tych samych nazw, ikon, układów i zachowań w całym produkcie. Jeśli przycisk „Zapisz” w jednym miejscu zapisuje formularz, w innym nie powinien oznaczać wysłania, publikacji albo przejścia do następnego kroku.'
			},
			{
				text: 'Spójność dotyczy również standardów znanych z innych produktów i platform. Użytkownicy przenoszą oczekiwania z aplikacji, stron i systemów, których używają na co dzień. Gdy projekt respektuje powszechne konwencje, obniża obciążenie poznawcze i pozwala skupić się na zadaniu zamiast na uczeniu się nietypowych zasad obsługi.'
			}
		],
		[
			{
				src: '/wdi-01/images/4.png',
				alt: 'Formularz logowania z typowym układem pól',
				caption:
					'Formularze logowania są zwykle zbudowane według podobnego schematu: najpierw login lub adres email, później hasło. Zachowanie tej konwencji sprawia, że użytkownik rozpoznaje wzorzec od razu; odwrócenie kolejności, na przykład umieszczenie hasła na samej górze, byłoby mylące.'
			}
		]
	),
	createRule(
		5,
		'Zapobieganie błędom',
		[
			{
				text: 'Najlepszy komunikat o błędzie to taki, którego użytkownik nie musi zobaczyć, bo system zawczasu ograniczył ryzyko pomyłki. Projekt powinien usuwać warunki sprzyjające błędom, stosować sensowne wartości domyślne, blokować niemożliwe akcje i jasno sygnalizować konsekwencje działań.'
			},
			{
				text: 'Szczególnie ważne jest zapobieganie błędom kosztownym lub trudnym do odwrócenia, na przykład usunięciu danych, wysłaniu formularza z błędnymi informacjami albo wykonaniu płatności. W takich sytuacjach warto dodać ograniczenia, podgląd skutków, walidację przed zatwierdzeniem lub potwierdzenie decyzji, a tam gdzie to możliwe także opcję cofnięcia.'
			}
		],
		[
			{
				src: '/wdi-01/images/5.png',
				alt: 'Kalkulator BMI ograniczający pole wieku do cyfr',
				caption:
					'Kalkulator BMI zapobiega błędom już na etapie wpisywania danych: w polu wieku pozwala wprowadzać wyłącznie cyfry. Dzięki temu użytkownik nie może przypadkowo wpisać litery ani znaku, którego system i tak nie byłby w stanie poprawnie przetworzyć.'
			}
		]
	),
	createRule(
		6,
		'Rozpoznawanie zamiast przypominania sobie',
		[
			{
				text: 'Interfejs powinien zmniejszać obciążenie pamięci użytkownika. Ważne elementy, dostępne akcje, opcje wyboru, etykiety pól i potrzebne informacje powinny być widoczne albo łatwo dostępne wtedy, gdy są potrzebne. Użytkownik nie powinien musieć pamiętać danych z poprzedniego ekranu, ukrytych skrótów lub znaczenia nieopisanych ikon.'
			},
			{
				text: 'Rozpoznawanie jest łatwiejsze niż samodzielne przypominanie sobie informacji. Dlatego menu, podpowiedzi kontekstowe, widoczne etykiety, historia ostatnich wyborów i jasne stany elementów pomagają wykonać zadanie szybciej oraz z mniejszym wysiłkiem. Dobra pomoc pojawia się w kontekście pracy, a nie wyłącznie w długiej instrukcji do zapamiętania.'
			}
		],
		[
			{
				src: '/wdi-01/images/6.png',
				alt: 'Menu kontekstowe otwarte po kliknięciu prawym przyciskiem myszy',
				caption:
					'Menu kontekstowe pokazuje dostępne akcje dokładnie wtedy, gdy użytkownik ich potrzebuje. Po zaznaczeniu elementu nie trzeba pamiętać skrótów klawiaturowych ani listy możliwych operacji, bo interfejs od razu podpowiada, co można zrobić.'
			}
		]
	),
	createRule(
		7,
		'Elastyczność i efektywność użytkowania',
		[
			{
				text: 'Interfejs powinien wspierać zarówno osoby początkujące, jak i zaawansowane. Nowy użytkownik potrzebuje czytelnej, prowadzącej ścieżki, a doświadczony chce działać szybciej dzięki skrótom, gestom, automatyzacji, zapamiętanym ustawieniom albo możliwości powtarzania częstych akcji.'
			},
			{
				text: 'Elastyczny produkt pozwala wykonać to samo zadanie na kilka sposobów, zależnie od doświadczenia, kontekstu i preferencji użytkownika. Personalizacja treści, możliwość dostosowania widoku, filtry, skróty klawiaturowe czy szybkie akcje zwiększają efektywność bez odbierania prostoty osobom, które korzystają z podstawowej ścieżki.'
			}
		],
		[
			{
				src: '/wdi-01/images/7.png',
				alt: 'Opcja kopiowania dostępna w menu oraz jako skrót klawiaturowy',
				caption:
					'Ta sama akcja może być dostępna na różne sposoby. Początkujący użytkownik może znaleźć kopiowanie w menu i zobaczyć, jakie opcje są dostępne, a zaawansowany wykona tę czynność szybciej przy użyciu skrótu klawiaturowego.'
			}
		]
	),
	createRule(
		8,
		'Estetyka i minimalistyczny design',
		[
			{
				text: 'Interfejs nie powinien zawierać informacji, które są nieistotne albo rzadko potrzebne w danym kontekście. Każdy dodatkowy element konkuruje o uwagę z tym, co naprawdę pomaga użytkownikowi wykonać zadanie. Minimalizm nie oznacza pustego lub płaskiego wyglądu, lecz świadome skupienie treści i warstwy wizualnej na najważniejszych celach.'
			},
			{
				text: 'Dobry projekt wizualny wzmacnia hierarchię informacji: pokazuje, co jest główne, co pomocnicze, a co można ukryć lub przenieść niżej. Należy usuwać rozpraszające dekoracje, zbędne teksty i duplikaty funkcji, a jednocześnie zachować te elementy, które realnie wspierają zrozumienie, orientację i podjęcie decyzji.'
			}
		],
		[
			{
				src: '/wdi-01/images/8.png',
				alt: 'Strona Next.js z prostą hierarchią informacji',
				caption:
					'Strona Next.js przekazuje najważniejsze informacje w prosty i uporządkowany sposób. Wyraźna hierarchia treści, ograniczona liczba elementów i oszczędna forma pomagają użytkownikowi szybko zrozumieć, czym jest produkt i gdzie przejść dalej.'
			}
		]
	),
	createRule(
		9,
		'Pomoc w rozpoznawaniu, diagnozowaniu i naprawianiu błędów',
		[
			{
				text: 'Komunikaty o błędach powinny być napisane prostym językiem, bez niepotrzebnych kodów technicznych i skrótów zrozumiałych tylko dla twórców systemu. Użytkownik powinien od razu wiedzieć, co się stało, gdzie wystąpił problem i jak może go rozwiązać.'
			},
			{
				text: 'Dobry komunikat nie tylko informuje o błędzie, ale pomaga wrócić do pracy. Powinien wskazywać problem precyzyjnie, być dobrze widoczny wizualnie oraz proponować konkretny następny krok: poprawienie pola, zmianę formatu, ponowienie próby, odzyskanie połączenia albo skorzystanie z alternatywnej akcji.'
			}
		],
		[
			{
				src: '/wdi-01/images/9.png',
				alt: 'Walidacja adresu email bezpośrednio w polu formularza',
				caption:
					'Formularz informuje użytkownika o błędnym adresie email już podczas wpisywania danych. Komunikat pojawia się przy konkretnym polu, więc łatwo rozpoznać problem, zrozumieć jego przyczynę i od razu poprawić wpisaną wartość.'
			}
		]
	),
	createRule(
		10,
		'Pomoc i dokumentacja',
		[
			{
				text: 'Najlepiej, gdy system jest na tyle zrozumiały, że dodatkowa instrukcja nie jest potrzebna. W praktyce jednak użytkownicy czasem potrzebują pomocy, zwłaszcza przy zadaniach złożonych, rzadko wykonywanych lub obarczonych większym ryzykiem. Dokumentacja powinna być łatwa do znalezienia i dostępna w momencie, w którym użytkownik jej potrzebuje.'
			},
			{
				text: 'Skuteczna pomoc jest konkretna, krótka i skupiona na zadaniu. Zamiast ogólnych opisów powinna prowadzić użytkownika przez jasne kroki, wyjaśniać znaczenie decyzji i pomagać rozwiązać bieżący problem. Najlepiej działa wtedy, gdy jest osadzona w kontekście ekranu, formularza lub funkcji, z której użytkownik właśnie korzysta.'
			}
		],
		[
			{
				src: '/wdi-01/images/10.png',
				alt: 'Dokumentacja Amazon dotycząca problemów z logowaniem',
				caption:
					'Pomoc Amazona dotycząca logowania jest łatwa do odnalezienia i porządkuje najczęstsze scenariusze problemów. Użytkownik może szybko przejść do konkretnej sytuacji, sprawdzić możliwe przyczyny i wykonać opisane kroki bez szukania rozwiązania metodą prób i błędów.'
			}
		]
	)
] as const satisfies Rule[];

const rulesByNumber = new Map(rules.map((rule) => [rule.number, rule]));

export const getRule = (number: number) => rulesByNumber.get(number) ?? null;
