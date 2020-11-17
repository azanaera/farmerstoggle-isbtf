package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/policy/PolicyVehicleDetailPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyVehicleDetailPanelSetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/policy/PolicyVehicleDetailPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyVehicleCoverageListDetailExpressionsImpl extends PolicyVehicleDetailPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PolicyVehicleDetailPanelSet.pcf: line 111, column 72
    function def_onEnter_62 (def :  pcf.EditableVehicleCoveragesLV) : void {
      def.onEnter(VehicleRU.Vehicle, VehicleRU)
    }
    
    // 'def' attribute on PanelRef at PolicyVehicleDetailPanelSet.pcf: line 125, column 26
    function def_onEnter_64 (def :  pcf.ClaimPolicyCovTermsCV) : void {
      def.onEnter(Coverage)
    }
    
    // 'def' attribute on PanelRef at PolicyVehicleDetailPanelSet.pcf: line 111, column 72
    function def_refreshVariables_63 (def :  pcf.EditableVehicleCoveragesLV) : void {
      def.refreshVariables(VehicleRU.Vehicle, VehicleRU)
    }
    
    // 'def' attribute on PanelRef at PolicyVehicleDetailPanelSet.pcf: line 125, column 26
    function def_refreshVariables_65 (def :  pcf.ClaimPolicyCovTermsCV) : void {
      def.refreshVariables(Coverage)
    }
    
    // EditButtons at PolicyVehicleDetailPanelSet.pcf: line 120, column 201
    function label_61 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'editVisible' attribute on EditButtons at PolicyVehicleDetailPanelSet.pcf: line 120, column 201
    function visible_60 () : java.lang.Boolean {
      return perm.Claim.edit(VehicleRU.Policy.Claim) and perm.Policy.edit(VehicleRU.Policy.Claim) and perm.Policy.makeeditable(VehicleRU.Policy.Claim) and perm.System.edit_coverages_ext
    }
    
    property get Coverage () : Coverage {
      return getCurrentSelection(1) as Coverage
    }
    
    property set Coverage ($arg :  Coverage) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/claim/policy/PolicyVehicleDetailPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyVehicleDetailPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput at PolicyVehicleDetailPanelSet.pcf: line 81, column 74
    function def_onEnter_46 (def :  pcf.EditableVehicleLienholdersLV) : void {
      def.onEnter(VehicleRU.Vehicle, VehicleRU.Policy.Claim)
    }
    
    // 'def' attribute on ListViewInput at PolicyVehicleDetailPanelSet.pcf: line 81, column 74
    function def_refreshVariables_47 (def :  pcf.EditableVehicleLienholdersLV) : void {
      def.refreshVariables(VehicleRU.Vehicle, VehicleRU.Policy.Claim)
    }
    
    // 'filter' attribute on TypeKeyInput (id=State_Input) at PolicyVehicleDetailPanelSet.pcf: line 60, column 45
    function filter_30 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return VALUE.hasCategory(JurisdictionType.TC_VEHICLE_REG)
    }
    
    // 'validationExpression' attribute on ListViewInput at PolicyVehicleDetailPanelSet.pcf: line 81, column 74
    function validationExpression_45 () : java.lang.Object {
      return VehicleRU.Vehicle.validateLienholders()
    }
    
    // 'value' attribute on TextInput (id=Number_Input) at PolicyVehicleDetailPanelSet.pcf: line 18, column 42
    function valueRoot_1 () : java.lang.Object {
      return VehicleRU
    }
    
    // 'value' attribute on TextInput (id=Make_Input) at PolicyVehicleDetailPanelSet.pcf: line 23, column 43
    function valueRoot_4 () : java.lang.Object {
      return VehicleRU.Vehicle
    }
    
    // 'value' attribute on TextInput (id=Number_Input) at PolicyVehicleDetailPanelSet.pcf: line 18, column 42
    function value_0 () : java.lang.Integer {
      return VehicleRU.RUNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=Style_Input) at PolicyVehicleDetailPanelSet.pcf: line 38, column 44
    function value_12 () : typekey.VehicleStyle {
      return VehicleRU.Vehicle.Style
    }
    
    // 'value' attribute on TextInput (id=VIN_Input) at PolicyVehicleDetailPanelSet.pcf: line 45, column 154
    function value_16 () : java.lang.String {
      return VehicleRU.Vehicle.Vin
    }
    
    // 'value' attribute on TextInput (id=SerialNumber_Input) at PolicyVehicleDetailPanelSet.pcf: line 50, column 138
    function value_21 () : java.lang.String {
      return VehicleRU.Vehicle.SerialNumber
    }
    
    // 'value' attribute on TextInput (id=Color_Input) at PolicyVehicleDetailPanelSet.pcf: line 54, column 44
    function value_25 () : java.lang.String {
      return VehicleRU.Vehicle.Color
    }
    
    // 'value' attribute on TypeKeyInput (id=State_Input) at PolicyVehicleDetailPanelSet.pcf: line 60, column 45
    function value_28 () : typekey.Jurisdiction {
      return VehicleRU.Vehicle.State
    }
    
    // 'value' attribute on TextInput (id=Make_Input) at PolicyVehicleDetailPanelSet.pcf: line 23, column 43
    function value_3 () : java.lang.String {
      return VehicleRU.Vehicle.Make
    }
    
    // 'value' attribute on TextInput (id=LicensePlate_Input) at PolicyVehicleDetailPanelSet.pcf: line 64, column 51
    function value_32 () : java.lang.String {
      return VehicleRU.Vehicle.LicensePlate
    }
    
    // 'value' attribute on TypeKeyInput (id=BoatType_Input) at PolicyVehicleDetailPanelSet.pcf: line 70, column 57
    function value_36 () : typekey.BoatType {
      return VehicleRU.Vehicle.BoatType
    }
    
    // 'value' attribute on TypeKeyInput (id=OffRoadStyle_Input) at PolicyVehicleDetailPanelSet.pcf: line 76, column 100
    function value_41 () : typekey.OffRoadVehicleStyle {
      return VehicleRU.Vehicle.OffRoadStyle
    }
    
    // 'value' attribute on TypeKeyInput (id=status_ext_Input) at PolicyVehicleDetailPanelSet.pcf: line 91, column 45
    function value_48 () : typekey.PolicyStatus {
      return VehicleRU.Vehicle.VehicleStatus_Ext
    }
    
    // 'value' attribute on DateInput (id=effective_date_ext_Input) at PolicyVehicleDetailPanelSet.pcf: line 95, column 56
    function value_51 () : java.util.Date {
      return VehicleRU.Vehicle.EffectiveDate_Ext
    }
    
    // 'value' attribute on DateInput (id=expiration_date_ext_Input) at PolicyVehicleDetailPanelSet.pcf: line 99, column 57
    function value_54 () : java.util.Date {
      return VehicleRU.Vehicle.ExpirationDate_Ext
    }
    
    // 'value' attribute on BooleanRadioInput (id=rideshare_use_ext_Input) at PolicyVehicleDetailPanelSet.pcf: line 103, column 55
    function value_57 () : java.lang.Boolean {
      return VehicleRU.Vehicle.RideshareUse_Ext
    }
    
    // 'value' attribute on TextInput (id=Model_Input) at PolicyVehicleDetailPanelSet.pcf: line 28, column 44
    function value_6 () : java.lang.String {
      return VehicleRU.Vehicle.Model
    }
    
    // 'value' attribute on TextInput (id=Year_Input) at PolicyVehicleDetailPanelSet.pcf: line 33, column 42
    function value_9 () : java.lang.Integer {
      return VehicleRU.Vehicle.Year
    }
    
    // 'visible' attribute on TextInput (id=VIN_Input) at PolicyVehicleDetailPanelSet.pcf: line 45, column 154
    function visible_15 () : java.lang.Boolean {
      return VehicleRU.Vehicle.Style != TC_BOAT && VehicleRU.Vehicle.Style != TC_ATV && VehicleRU.Vehicle.Style != TC_SNOWMOBILE
    }
    
    // 'visible' attribute on TextInput (id=SerialNumber_Input) at PolicyVehicleDetailPanelSet.pcf: line 50, column 138
    function visible_20 () : java.lang.Boolean {
      return VehicleRU.Vehicle.Style == TC_BOAT || VehicleRU.Vehicle.Style == TC_ATV || VehicleRU.Vehicle.Style == TC_SNOWMOBILE
    }
    
    // 'visible' attribute on TypeKeyInput (id=BoatType_Input) at PolicyVehicleDetailPanelSet.pcf: line 70, column 57
    function visible_35 () : java.lang.Boolean {
      return VehicleRU.Vehicle.Style == TC_BOAT
    }
    
    // 'visible' attribute on TypeKeyInput (id=OffRoadStyle_Input) at PolicyVehicleDetailPanelSet.pcf: line 76, column 100
    function visible_40 () : java.lang.Boolean {
      return VehicleRU.Vehicle.Style == TC_ATV || VehicleRU.Vehicle.Style == TC_SNOWMOBILE
    }
    
    property get VehicleRU () : VehicleRU {
      return getRequireValue("VehicleRU", 0) as VehicleRU
    }
    
    property set VehicleRU ($arg :  VehicleRU) {
      setRequireValue("VehicleRU", 0, $arg)
    }
    
    
  }
  
  
}