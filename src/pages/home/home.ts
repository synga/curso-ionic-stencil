import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  /**
   * Array de objetos contento todas as páginas da lista de APIs.
   */
  public api: Array<{ titulo: string; pagina: any }> = [
    { titulo: "Navcontroller", pagina: "NavcontrollerPage" },
    { titulo: "NavParams", pagina: "NavparamsPage" },
    { titulo: "Lifecycle Hooks", pagina: "LifecyclePage" },
    { titulo: "NavGuards", pagina: "NavguardsPage" },
    { titulo: "View Controller", pagina: "ViewControllerPage" },
    { titulo: "ElementRef", pagina: "ElementrefPage" },
    { titulo: "Platform", pagina: "PlatformPage" },
    { titulo: "Content", pagina: "ContentPage" },
    { titulo: "Configuration", pagina: "ConfigurationPage" },
    { titulo: "Requisições HTTP", pagina: "HttpPage" },
    { titulo: "Events", pagina: "EventsPage" },
    { titulo: "Storage", pagina: "StoragePage" },
    { titulo: "ViewChild", pagina: "ViewchildPage" }
  ];

  /**
   * Array de objetos contento todas as páginas da lista de componentes do Angular.
   */
  public angular: Array<{ titulo: string; pagina: any }> = [
    { titulo: "Data Binding", pagina: "BindingPage" },
    { titulo: "NgModel", pagina: "NgmodelPage" },
    { titulo: "NgIf", pagina: "NgifPage" },
    { titulo: "NgFor", pagina: "NgforPage" },
    { titulo: "NgSwitch", pagina: "NgswitchPage" },
    { titulo: "Ngclass", pagina: "NgclassPage" },
    {titulo: "Form", pagina: "FormPage"}
  ];

  /**
   * Array de objetos contento todas as páginas da lista de componentes.
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
    { titulo: "FAB", pagina: "FabsPage" },
    { titulo: "Gestures", pagina: "GesturesPage" },
    { titulo: "Footer", pagina: "FooterPage" },
    { titulo: "Header", pagina: "HeaderPage" },
    { titulo: "Toolbar", pagina: "ToolbarPage" },
    { titulo: "Segment", pagina: "SegmentPage" },
    { titulo: "Icons", pagina: "IconsPage" },
    { titulo: "Inputs", pagina: "InputsPage" },
    { titulo: "Datetime", pagina: "DatetimePage" },
    { titulo: "Range", pagina: "RangePage" },
    { titulo: "Modal", pagina: "ModalPage" },
    { titulo: "Popover", pagina: "PopoverPage" },
    { titulo: "Infinite Scroll", pagina: "InfiniteScrollPage" },
    { titulo: "Refresher", pagina: "RefresherPage" },
    { titulo: "Searchbar", pagina: "SearchbarPage" },
    { titulo: "Menus", pagina: "MenusPage" },
    { titulo: "Split Panel", pagina: "SplitPanelPage" },
    { titulo: "Tabs", pagina: "TabsPage" },
    { titulo: "Virtual Scroll", pagina: "VirtualScrollPage" }
  ];

  /**
   * Array de objetos contento todas as páginas da lista de plugins.
   */
  public plugins: Array<{ titulo: string; pagina: any }> = [
    { titulo: "Camera", pagina: "CameraPage" },
    { titulo: "Geolocation", pagina: "GeolocationPage" },
    { titulo: "Device", pagina: "DevicePage" },
    { titulo: "Network", pagina: "NetworkPage" },
    { titulo: "Local Notification", pagina: "LocalNotificationPage" }
  ];

  /**
   * Variavel para ontrolar o menu de segmentação
   */
  public segmento: string = "angular";

  constructor(public navCtrl: NavController) {}

  /**
   * Metodo que leva para outra página a partir do nome do componentes da página passado por parametro
   * @param {string} pagina - Nome do componente lazy-loaded da página.
   */
  irParaPagina = (pagina: string) => {
    this.navCtrl.push(pagina);
  };
}
