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
	createRule(1, 'Widoczność stanu systemu'),
	createRule(2, 'Dopasowanie systemu do świata rzeczywistego'),
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
	createRule(4, 'Spójność i standardy'),
	createRule(5, 'Zapobieganie błędom'),
	createRule(6, 'Rozpoznawanie zamiast przypominania sobie'),
	createRule(7, 'Elastyczność i efektywność użytkowania'),
	createRule(8, 'Estetyka i minimalistyczny design'),
	createRule(9, 'Pomoc w rozpoznawaniu, diagnozowaniu i naprawianiu błędów'),
	createRule(10, 'Pomoc i dokumentacja')
] as const satisfies Rule[];

const rulesByNumber = new Map(rules.map((rule) => [rule.number, rule]));

export const getRule = (number: number) => rulesByNumber.get(number) ?? null;
