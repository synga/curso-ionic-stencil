import { Component } from "@angular/core";
import { NavController, Platform } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  /**
   * Array de objetos contendo todas as páginas da lista de componentes do Angular.
   */
  public angular: Array<{ titulo: string; pagina: any }> = [
    { titulo: "Data Binding", pagina: "BindingPage" },
    { titulo: "NgIf", pagina: "NgifPage" },
    { titulo: "NgFor", pagina: "NgforPage" },
    { titulo: "NgSwitch", pagina: "NgswitchPage" },
    { titulo: "Ngclass", pagina: "NgclassPage" },
    { titulo: "Form", pagina: "FormPage" }
  ];

  /**
   * Array de objetos contendo todas as páginas da lista de componentes.
   */
  public componentes: Array<{ titulo: string; pagina: any }> = [
    { titulo: "Buttons", pagina: "ButtonsPage" },
    { titulo: "Action Sheet", pagina: "ActionSheetPage" },
    { titulo: "Alert", pagina: "AlertPage" },
    { titulo: "Toast", pagina: "ToastPage" },
    { titulo: "Badge e Chip", pagina: "BadgesChipsPage" },
    { titulo: "Cards", pagina: "CardsPage" },
    { titulo: "Grid", pagina: "GridPage" },
    { titulo: "Loading", pagina: "LoadingPage" },
    { titulo: "Spinner", pagina: "SpinnerPage" },
    { titulo: "Lists", pagina: "ListsPage" },
    { titulo: "Item", pagina: "ItemPage" },
    { titulo: "FAB", pagina: "FabsPage" },
    { titulo: "Gestures", pagina: "GesturesPage" },
    { titulo: "Footer", pagina: "FooterPage" },
    { titulo: "Header", pagina: "HeaderPage" },
    { titulo: "Segment", pagina: "SegmentPage" },
    { titulo: "Icons", pagina: "IconsPage" },
    { titulo: "Inputs", pagina: "InputsPage" },
    { titulo: "Datetime", pagina: "DatetimePage" },
    { titulo: "Range", pagina: "RangePage" },
    { titulo: "Toggle", pagina: "TogglePage" },
    { titulo: "Modal", pagina: "ModalPage" },
    { titulo: "Popover", pagina: "PopoverPage" },
    { titulo: "Infinite Scroll", pagina: "InfiniteScrollPage" },
    { titulo: "Refresher", pagina: "RefresherPage" },
    { titulo: "Searchbar", pagina: "SearchbarPage" },
    { titulo: "Menus", pagina: "MenusPage" },
    { titulo: "Tabs", pagina: "TabsPage" },
    { titulo: "Virtual Scroll", pagina: "VirtualScrollPage" }
  ];

  /**
   * Array de objetos contendo todas as páginas da lista de plugins.
   */
  public apis: Array<{ titulo: string; pagina: any }> = [
    { titulo: "Pipes", pagina: "PipesPage" },
    { titulo: "Directives", pagina: "DirectivesPage" },
    { titulo: "Providers", pagina: "ProvidersPage" },
    { titulo: "Components", pagina: "ComponentsPage" },
  ];

  /**
   * Array de objetos contendo todas as páginas da lista de plugins.
   */
  public plugins: Array<{ titulo: string; pagina: any }> = [
    { titulo: "Camera", pagina: "CameraPage" },
    { titulo: "Geolocation", pagina: "GeolocationPage" },
    { titulo: "Network", pagina: "NetworkPage" }
  ];

  /**
   * Variavel para controlar o menu de segmentação
   */
  public segmento: string = "angular";

  constructor(public navCtrl: NavController, public storage: Storage, public platform: Platform) { }

  /**
   * Metodo que leva para outra página a partir do nome do componentes da página passado por parametro
   * @param {string} pagina - Nome do componente lazy-loaded da página.
   */
  irParaPagina = (pagina: string) => {
    this.navCtrl.push(pagina);
  };
}
