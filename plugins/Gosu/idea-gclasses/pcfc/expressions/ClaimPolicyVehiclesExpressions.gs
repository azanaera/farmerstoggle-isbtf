package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/policy/ClaimPolicyVehicles.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimPolicyVehiclesExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/policy/ClaimPolicyVehicles.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimPolicyVehiclesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (Claim :  Claim) : int {
      return 0
    }
    
    // 'canEdit' attribute on Page (id=ClaimPolicyVehicles) at ClaimPolicyVehicles.pcf: line 9, column 66
    function canEdit_6 () : java.lang.Boolean {
      return gw.api.policy.PolicyTabUtil.hasTab(Claim, "Vehicles") and perm.Claim.edit(Claim) and perm.Policy.edit(Claim)
    }
    
    // 'canVisit' attribute on Page (id=ClaimPolicyVehicles) at ClaimPolicyVehicles.pcf: line 9, column 66
    static function canVisit_7 (Claim :  Claim) : java.lang.Boolean {
      return gw.api.policy.PolicyTabUtil.hasTab(Claim, "Vehicles") and perm.Policy.view(Claim) and perm.System.viewpolicy
    }
    
    // 'label' attribute on AlertBar (id=ClaimPolicyVehicles_PartialListAlertBar) at ClaimPolicyVehicles.pcf: line 35, column 148
    function label_1 () : java.lang.Object {
      return DisplayKey.get("Web.ClaimPolicy.Vehicles.PartialList", Claim.Policy.TotalVehicles)
    }
    
    // Page (id=ClaimPolicyVehicles) at ClaimPolicyVehicles.pcf: line 9, column 66
    static function parent_8 (Claim :  Claim) : pcf.api.Destination {
      return pcf.ClaimPolicyGroup.createDestination(Claim)
    }
    
    // 'visible' attribute on AlertBar (id=ClaimPolicyVehicles_PartialListAlertBar) at ClaimPolicyVehicles.pcf: line 35, column 148
    function visible_0 () : java.lang.Boolean {
      return Claim.Policy.Verified and (Claim.Policy.TotalVehicles >= 0) and (Claim.Policy.TotalVehicles != Claim.Policy.Vehicles.length)
    }
    
    property get Claim () : Claim {
      return getVariableValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setVariableValue("Claim", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.ClaimPolicyVehicles {
      return super.CurrentLocation as pcf.ClaimPolicyVehicles
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/claim/policy/ClaimPolicyVehicles.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends ClaimPolicyVehiclesExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at ClaimPolicyVehicles.pcf: line 41, column 59
    function def_onEnter_2 (def :  pcf.VehiclesLV) : void {
      def.onEnter(Claim.Policy.Vehicles, Claim)
    }
    
    // 'def' attribute on PanelRef at ClaimPolicyVehicles.pcf: line 47, column 60
    function def_onEnter_4 (def :  pcf.PolicyVehicleDetailPanelSet) : void {
      def.onEnter(VehicleRU)
    }
    
    // 'def' attribute on PanelRef at ClaimPolicyVehicles.pcf: line 41, column 59
    function def_refreshVariables_3 (def :  pcf.VehiclesLV) : void {
      def.refreshVariables(Claim.Policy.Vehicles, Claim)
    }
    
    // 'def' attribute on PanelRef at ClaimPolicyVehicles.pcf: line 47, column 60
    function def_refreshVariables_5 (def :  pcf.PolicyVehicleDetailPanelSet) : void {
      def.refreshVariables(VehicleRU)
    }
    
    property get VehicleRU () : VehicleRU {
      return getCurrentSelection(1) as VehicleRU
    }
    
    property set VehicleRU ($arg :  VehicleRU) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}