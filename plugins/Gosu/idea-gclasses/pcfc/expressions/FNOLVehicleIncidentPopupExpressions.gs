package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.claim.FnolServiceRequestHelper
@javax.annotation.processing.Generated("config/web/pcf/claim/FNOL/FNOLVehicleIncidentPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FNOLVehicleIncidentPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/FNOL/FNOLVehicleIncidentPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FNOLVehicleIncidentPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (Claim :  Claim, Wizard :  gw.api.claim.NewClaimWizardInfo) : int {
      return 1
    }
    
    static function __constructorIndex (VehicleIncident :  VehicleIncident, Wizard :  gw.api.claim.NewClaimWizardInfo) : int {
      return 0
    }
    
    // 'action' attribute on MenuItem (id=NewVehicleMenuItem) at FNOLVehicleIncidentPopup.pcf: line 83, column 110
    function action_10 () : void {
      VehicleIncident.Vehicle = new Vehicle(); NewVehicle = true;
    }
    
    // 'action' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_136 () : void {
      AddressBookPickerPopup.push(statictypeof (VehicleIncident.incidentowner), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_138 () : void {
      if (VehicleIncident.incidentowner != null) { ClaimContactDetailPopup.push(VehicleIncident.incidentowner, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_139 () : void {
      ClaimContactDetailPopup.push(VehicleIncident.incidentowner, Claim)
    }
    
    // 'action' attribute on MenuItem (id=CalculateButton) at FNOLVehicleIncidentPopup.pcf: line 266, column 51
    function action_165 () : void {
      TotalLossCalculatorPopup.push(VehicleIncident)
    }
    
    // 'action' attribute on ToolbarButton (id=AddDriverButton) at FNOLVehicleIncidentPopup.pcf: line 397, column 63
    function action_243 () : void {
      FNOLContactPopup.push(Claim, null, ContactRole.TC_DRIVER, VehicleIncident, Wizard);
    }
    
    // 'action' attribute on ToolbarButton (id=AddPassengerButton) at FNOLVehicleIncidentPopup.pcf: line 404, column 35
    function action_244 () : void {
      FNOLContactPopup.push(Claim, null, ContactRole.TC_PASSENGER, VehicleIncident, Wizard);
    }
    
    // 'action' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_277 () : void {
      AddressBookPickerPopup.push(statictypeof (VehicleIncident.InsuredRep), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_279 () : void {
      if (VehicleIncident.InsuredRep != null) { ClaimContactDetailPopup.push(VehicleIncident.InsuredRep, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_281 () : void {
      ClaimContactDetailPopup.push(VehicleIncident.InsuredRep, Claim)
    }
    
    // 'action' attribute on MenuItem (id=VehicleDetailMenuItem) at FNOLVehicleIncidentPopup.pcf: line 79, column 113
    function action_8 () : void {
      NewClaimWizard_PolicyVehicleDetailPopup.push(Claim.Policy.getVehicleRU( VehicleIncident.Vehicle?.ID ), Claim.Policy)
    }
    
    // 'action' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_137 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (VehicleIncident.incidentowner), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_140 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(VehicleIncident.incidentowner, Claim)
    }
    
    // 'action' attribute on MenuItem (id=CalculateButton) at FNOLVehicleIncidentPopup.pcf: line 266, column 51
    function action_dest_166 () : pcf.api.Destination {
      return pcf.TotalLossCalculatorPopup.createDestination(VehicleIncident)
    }
    
    // 'action' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_278 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (VehicleIncident.InsuredRep), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_282 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(VehicleIncident.InsuredRep, Claim)
    }
    
    // 'action' attribute on MenuItem (id=VehicleDetailMenuItem) at FNOLVehicleIncidentPopup.pcf: line 79, column 113
    function action_dest_9 () : pcf.api.Destination {
      return pcf.NewClaimWizard_PolicyVehicleDetailPopup.createDestination(Claim.Policy.getVehicleRU( VehicleIncident.Vehicle?.ID ), Claim.Policy)
    }
    
    // 'afterEnter' attribute on Popup (id=FNOLVehicleIncidentPopup) at FNOLVehicleIncidentPopup.pcf: line 14, column 76
    function afterEnter_315 () : void {
      initializeVariable()
    }
    
    // 'available' attribute on Reflect at FNOLVehicleIncidentPopup.pcf: line 110, column 39
    function available_27 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return Claim.canEditVehicle(VALUE)
    }
    
    // 'available' attribute on TextInput (id=Vehicle_Year_Input) at FNOLVehicleIncidentPopup.pcf: line 106, column 54
    function available_30 () : java.lang.Boolean {
      return Claim.canEditVehicle(VehicleIncident.Vehicle)
    }
    
    // 'beforeCancel' attribute on Popup (id=FNOLVehicleIncidentPopup) at FNOLVehicleIncidentPopup.pcf: line 14, column 76
    function beforeCancel_316 () : void {
      Wizard.VehicleIncidentOtherServiceRequests.removeWhere( \ sr -> not vehicleIncidentOtherServiceRequestsCopy.contains(sr))
    }
    
    // 'beforeCommit' attribute on Popup (id=FNOLVehicleIncidentPopup) at FNOLVehicleIncidentPopup.pcf: line 14, column 76
    function beforeCommit_317 (pickedValue :  VehicleIncident) : void {
      cleanBeforeCommit()
    }
    
    // 'def' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_133 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (VehicleIncident.incidentowner), null, Claim)
    }
    
    // 'def' attribute on ListViewInput at FNOLVehicleIncidentPopup.pcf: line 372, column 57
    function def_onEnter_240 (def :  pcf.DriverCitationsLV) : void {
      def.onEnter(VehicleIncident)
    }
    
    // 'def' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_274 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (VehicleIncident.InsuredRep), null, Claim)
    }
    
    // 'def' attribute on InputSetRef (id=LocationPhone_Ext) at FNOLVehicleIncidentPopup.pcf: line 513, column 41
    function def_onEnter_302 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.EntityPhoneDelegate(VehicleIncident, VehicleIncident#CellPhone_Ext), DisplayKey.get("Toggle.Web.VehicleIncidentDV.Phone"), false))
    }
    
    // 'def' attribute on InputSetRef at FNOLVehicleIncidentPopup.pcf: line 521, column 56
    function def_onEnter_311 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(addressOwner)
    }
    
    // 'def' attribute on PanelRef at FNOLVehicleIncidentPopup.pcf: line 536, column 135
    function def_onEnter_313 (def :  pcf.VehicleIncidentPanelSet) : void {
      def.onEnter(VehicleIncident, Wizard.UnusedServiceRequests, Wizard.VehicleIncidentOtherServiceRequests)
    }
    
    // 'def' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_134 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (VehicleIncident.incidentowner), null, Claim)
    }
    
    // 'def' attribute on ListViewInput at FNOLVehicleIncidentPopup.pcf: line 372, column 57
    function def_refreshVariables_241 (def :  pcf.DriverCitationsLV) : void {
      def.refreshVariables(VehicleIncident)
    }
    
    // 'def' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_275 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (VehicleIncident.InsuredRep), null, Claim)
    }
    
    // 'def' attribute on InputSetRef (id=LocationPhone_Ext) at FNOLVehicleIncidentPopup.pcf: line 513, column 41
    function def_refreshVariables_303 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.EntityPhoneDelegate(VehicleIncident, VehicleIncident#CellPhone_Ext), DisplayKey.get("Toggle.Web.VehicleIncidentDV.Phone"), false))
    }
    
    // 'def' attribute on InputSetRef at FNOLVehicleIncidentPopup.pcf: line 521, column 56
    function def_refreshVariables_312 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(addressOwner)
    }
    
    // 'def' attribute on PanelRef at FNOLVehicleIncidentPopup.pcf: line 536, column 135
    function def_refreshVariables_314 (def :  pcf.VehicleIncidentPanelSet) : void {
      def.refreshVariables(VehicleIncident, Wizard.UnusedServiceRequests, Wizard.VehicleIncidentOtherServiceRequests)
    }
    
    // 'value' attribute on TextInput (id=Vehicle_VIN_Input) at FNOLVehicleIncidentPopup.pcf: line 197, column 235
    function defaultSetter_111 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.Vin = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Potential_Side_Hustle_Involved_Input) at FNOLVehicleIncidentPopup.pcf: line 209, column 39
    function defaultSetter_118 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.PotentialSideHustle_Ext = (__VALUE_TO_SET as typekey.PotentialSideHustle_Ext)
    }
    
    // 'value' attribute on TypeKeyInput (id=Side_Hustle_Phase_Input) at FNOLVehicleIncidentPopup.pcf: line 216, column 39
    function defaultSetter_124 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.SideHustlePhase_Ext = (__VALUE_TO_SET as typekey.SideHustlePhase_Ext)
    }
    
    // 'value' attribute on TypeKeyInput (id=Child_Safety_Seat_Input) at FNOLVehicleIncidentPopup.pcf: line 223, column 32
    function defaultSetter_129 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.ChildSafetySeat_Ext = (__VALUE_TO_SET as typekey.ChildSafetySeat_Ext)
    }
    
    // 'value' attribute on RangeInput (id=Vehicle_Picker_Input) at FNOLVehicleIncidentPopup.pcf: line 75, column 39
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle = (__VALUE_TO_SET as entity.Vehicle)
    }
    
    // 'value' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_143 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.incidentowner = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Theft_Indicator_Input) at FNOLVehicleIncidentPopup.pcf: line 237, column 39
    function defaultSetter_153 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.VehStolenInd = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleParked_Input) at FNOLVehicleIncidentPopup.pcf: line 244, column 55
    function defaultSetter_158 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.VehicleParked = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at FNOLVehicleIncidentPopup.pcf: line 261, column 54
    function defaultSetter_162 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=TotalLoss_Input) at FNOLVehicleIncidentPopup.pcf: line 266, column 51
    function defaultSetter_168 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.TotalLoss = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyRadioInput (id=GlassRepairAndReplaceRadioButton_Ext_Input) at FNOLVehicleIncidentPopup.pcf: line 282, column 63
    function defaultSetter_175 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.GlassRepairAndReplace_Ext = (__VALUE_TO_SET as typekey.GlassRepairAndReplace_Ext)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Operable_Input) at FNOLVehicleIncidentPopup.pcf: line 287, column 58
    function defaultSetter_179 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.VehicleOperable = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Theft_OdomRead_Input) at FNOLVehicleIncidentPopup.pcf: line 294, column 32
    function defaultSetter_183 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.OdomRead = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Exposure_AirbagsDeployed_Input) at FNOLVehicleIncidentPopup.pcf: line 302, column 57
    function defaultSetter_189 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.AirbagsDeployed = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Exposure_EquipmentFailure_Input) at FNOLVehicleIncidentPopup.pcf: line 311, column 58
    function defaultSetter_195 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.EquipmentFailure = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Speed_Input) at FNOLVehicleIncidentPopup.pcf: line 326, column 93
    function defaultSetter_201 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Speed = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=VehicleDirection_Input) at FNOLVehicleIncidentPopup.pcf: line 333, column 93
    function defaultSetter_207 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.VehicleDirection = (__VALUE_TO_SET as typekey.VehicleDirection)
    }
    
    // 'value' attribute on TypeKeyInput (id=CollisionPoint_Input) at FNOLVehicleIncidentPopup.pcf: line 340, column 58
    function defaultSetter_213 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.CollisionPoint = (__VALUE_TO_SET as typekey.CollisionPoint)
    }
    
    // 'value' attribute on BooleanRadioInput (id=LoanInformation_Loan_Input) at FNOLVehicleIncidentPopup.pcf: line 345, column 54
    function defaultSetter_218 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.Loan = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CurrencyInput (id=MonthlyPayment_Input) at FNOLVehicleIncidentPopup.pcf: line 353, column 68
    function defaultSetter_223 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.LoanMonthlyPayment = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TextInput (id=MonthsRemaining_Input) at FNOLVehicleIncidentPopup.pcf: line 360, column 67
    function defaultSetter_229 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.LoanMonthsRemaining = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_VehicleType_Input) at FNOLVehicleIncidentPopup.pcf: line 91, column 99
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.VehicleType = (__VALUE_TO_SET as typekey.VehicleType)
    }
    
    // 'value' attribute on CurrencyInput (id=PayoffAmount_Input) at FNOLVehicleIncidentPopup.pcf: line 366, column 67
    function defaultSetter_235 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.LoanPayoffAmount = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Theft_VehLockInd_Input) at FNOLVehicleIncidentPopup.pcf: line 458, column 52
    function defaultSetter_262 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.VehLockInd = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Theft_AntiThftInd_Input) at FNOLVehicleIncidentPopup.pcf: line 465, column 53
    function defaultSetter_266 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.AntiThftInd = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Theft_AffdvCmplInd_Input) at FNOLVehicleIncidentPopup.pcf: line 474, column 43
    function defaultSetter_270 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.AffdvCmplInd = (__VALUE_TO_SET as typekey.YesNo)
    }
    
    // 'value' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_285 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.InsuredRep = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=LocationType_Ext_Input) at FNOLVehicleIncidentPopup.pcf: line 509, column 39
    function defaultSetter_298 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.LocationType_Ext = (__VALUE_TO_SET as typekey.VehicleDamageLocation_Ext)
    }
    
    // 'value' attribute on TextInput (id=Address_Description_Ext_Input) at FNOLVehicleIncidentPopup.pcf: line 519, column 59
    function defaultSetter_307 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.Address.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Year_Input) at FNOLVehicleIncidentPopup.pcf: line 106, column 54
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.Year = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Make_Input) at FNOLVehicleIncidentPopup.pcf: line 119, column 54
    function defaultSetter_44 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.Make = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Model_Input) at FNOLVehicleIncidentPopup.pcf: line 132, column 54
    function defaultSetter_55 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.Model = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=LossParty_Input) at FNOLVehicleIncidentPopup.pcf: line 62, column 37
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      InsurerLoss = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_Style_Input) at FNOLVehicleIncidentPopup.pcf: line 146, column 54
    function defaultSetter_66 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.Style = (__VALUE_TO_SET as typekey.VehicleStyle)
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Color_Input) at FNOLVehicleIncidentPopup.pcf: line 159, column 54
    function defaultSetter_77 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.Color = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Vehicle_LicensePlate_Input) at FNOLVehicleIncidentPopup.pcf: line 171, column 54
    function defaultSetter_88 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.LicensePlate = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_State_Input) at FNOLVehicleIncidentPopup.pcf: line 185, column 56
    function defaultSetter_99 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.State = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'editable' attribute on TextInput (id=Address_Description_Ext_Input) at FNOLVehicleIncidentPopup.pcf: line 519, column 59
    function editable_304 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.CCAddressOwnerFieldId.DESCRIPTION)
    }
    
    // 'filter' attribute on TypeKeyInput (id=Vehicle_State_Input) at FNOLVehicleIncidentPopup.pcf: line 185, column 56
    function filter_101 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return VALUE.hasCategory(JurisdictionType.TC_VEHICLE_REG)
    }
    
    // 'icon' attribute on TitleBar at FNOLVehicleIncidentPopup.pcf: line 45, column 33
    function icon_1 () : java.lang.String {
      return VehicleIncident.HeaderIcon
    }
    
    // 'initialValue' attribute on Variable at FNOLVehicleIncidentPopup.pcf: line 37, column 51
    function initialValue_0 () : java.util.Set<ServiceRequest> {
      return Wizard.VehicleIncidentOtherServiceRequests.copy()
    }
    
    // EditButtons at FNOLVehicleIncidentPopup.pcf: line 48, column 40
    function label_3 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'onChange' attribute on PostOnChange at FNOLVehicleIncidentPopup.pcf: line 304, column 78
    function onChange_186 () : void {
      VehicleIncident.TotalLossCalculatorPreUpdate()
    }
    
    // 'onChange' attribute on PostOnChange at FNOLVehicleIncidentPopup.pcf: line 64, column 131
    function onChange_4 () : void {
      VehicleIncident.LossParty = (InsurerLoss ? LossPartyType.TC_INSURED : LossPartyType.TC_THIRD_PARTY)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_141 (PickedValue :  Contact) : void {
      var contactType = statictypeof (VehicleIncident.incidentowner); var result = eval("VehicleIncident.incidentowner = Claim.resolveContact(VehicleIncident.incidentowner) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_283 (PickedValue :  Contact) : void {
      var contactType = statictypeof (VehicleIncident.InsuredRep); var result = eval("VehicleIncident.InsuredRep = Claim.resolveContact(VehicleIncident.InsuredRep) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'pickValue' attribute on EditButtons at FNOLVehicleIncidentPopup.pcf: line 48, column 40
    function pickValue_2 () : VehicleIncident {
      return VehicleIncident
    }
    
    // 'value' attribute on Reflect at FNOLVehicleIncidentPopup.pcf: line 201, column 38
    function reflectionValue_106 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.Vin
    }
    
    // Reflect at FNOLVehicleIncidentPopup.pcf: line 93, column 47
    function reflectionValue_20 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return (VehicleIncident.Claim.Policy.isPolicyVehicle(VALUE)) ? ("listed") : "<NOCHANGE>"
    }
    
    // 'value' attribute on Reflect at FNOLVehicleIncidentPopup.pcf: line 110, column 39
    function reflectionValue_28 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.Year
    }
    
    // 'value' attribute on Reflect at FNOLVehicleIncidentPopup.pcf: line 123, column 39
    function reflectionValue_39 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.Make
    }
    
    // 'value' attribute on Reflect at FNOLVehicleIncidentPopup.pcf: line 136, column 40
    function reflectionValue_50 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.Model
    }
    
    // 'value' attribute on Reflect at FNOLVehicleIncidentPopup.pcf: line 150, column 40
    function reflectionValue_61 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.Style
    }
    
    // 'value' attribute on Reflect at FNOLVehicleIncidentPopup.pcf: line 163, column 40
    function reflectionValue_72 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.Color
    }
    
    // 'value' attribute on Reflect at FNOLVehicleIncidentPopup.pcf: line 175, column 47
    function reflectionValue_83 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.LicensePlate
    }
    
    // 'value' attribute on Reflect at FNOLVehicleIncidentPopup.pcf: line 189, column 40
    function reflectionValue_94 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.State
    }
    
    // 'required' attribute on TextInput (id=Address_Description_Ext_Input) at FNOLVehicleIncidentPopup.pcf: line 519, column 59
    function required_305 () : java.lang.Boolean {
      return addressOwner.isRequired(gw.api.address.CCAddressOwnerFieldId.DESCRIPTION)
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at FNOLVehicleIncidentPopup.pcf: line 438, column 249
    function sortValue_245 (ContactPerson :  entity.Contact) : java.lang.Object {
      return DisplayKey.get("Web.FNOLVehicleIncidentPopup.NamePosition", ContactPerson.DisplayName, (VehicleIncident.driver == ContactPerson ? ContactRole.TC_DRIVER.DisplayName : ContactRole.TC_PASSENGER.DisplayName))
    }
    
    // 'value' attribute on TextCell (id=Injuries_Cell) at FNOLVehicleIncidentPopup.pcf: line 442, column 102
    function sortValue_246 (ContactPerson :  entity.Contact) : java.lang.Object {
      return Wizard.getInjuryDescription( Claim.getClaimContact(ContactPerson) )
    }
    
    // 'toRemove' attribute on RowIterator at FNOLVehicleIncidentPopup.pcf: line 417, column 50
    function toRemove_258 (ContactPerson :  entity.Contact) : void {
      removeContact(ContactPerson)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_145 () : java.lang.Object {
      return Claim.RelatedContacts
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Picker_Input) at FNOLVehicleIncidentPopup.pcf: line 75, column 39
    function valueRange_15 () : java.lang.Object {
      return VehicleIncident.AvailableVehicles
    }
    
    // 'value' attribute on RangeInput (id=Vehicle_Picker_Input) at FNOLVehicleIncidentPopup.pcf: line 75, column 39
    function valueRoot_14 () : java.lang.Object {
      return VehicleIncident
    }
    
    // 'value' attribute on TextInput (id=Address_Description_Ext_Input) at FNOLVehicleIncidentPopup.pcf: line 519, column 59
    function valueRoot_308 () : java.lang.Object {
      return addressOwner.Address
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Year_Input) at FNOLVehicleIncidentPopup.pcf: line 106, column 54
    function valueRoot_34 () : java.lang.Object {
      return VehicleIncident.Vehicle
    }
    
    // 'value' attribute on TextInput (id=Vehicle_VIN_Input) at FNOLVehicleIncidentPopup.pcf: line 197, column 235
    function value_110 () : java.lang.String {
      return VehicleIncident.Vehicle.Vin
    }
    
    // 'value' attribute on TypeKeyInput (id=Potential_Side_Hustle_Involved_Input) at FNOLVehicleIncidentPopup.pcf: line 209, column 39
    function value_117 () : typekey.PotentialSideHustle_Ext {
      return VehicleIncident.PotentialSideHustle_Ext
    }
    
    // 'value' attribute on RangeInput (id=Vehicle_Picker_Input) at FNOLVehicleIncidentPopup.pcf: line 75, column 39
    function value_12 () : entity.Vehicle {
      return VehicleIncident.Vehicle
    }
    
    // 'value' attribute on TypeKeyInput (id=Side_Hustle_Phase_Input) at FNOLVehicleIncidentPopup.pcf: line 216, column 39
    function value_123 () : typekey.SideHustlePhase_Ext {
      return VehicleIncident.SideHustlePhase_Ext
    }
    
    // 'value' attribute on TypeKeyInput (id=Child_Safety_Seat_Input) at FNOLVehicleIncidentPopup.pcf: line 223, column 32
    function value_128 () : typekey.ChildSafetySeat_Ext {
      return VehicleIncident.ChildSafetySeat_Ext
    }
    
    // 'value' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_142 () : entity.Contact {
      return VehicleIncident.incidentowner
    }
    
    // 'value' attribute on BooleanRadioInput (id=Theft_Indicator_Input) at FNOLVehicleIncidentPopup.pcf: line 237, column 39
    function value_152 () : java.lang.Boolean {
      return VehicleIncident.VehStolenInd
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleParked_Input) at FNOLVehicleIncidentPopup.pcf: line 244, column 55
    function value_157 () : java.lang.Boolean {
      return VehicleIncident.VehicleParked
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at FNOLVehicleIncidentPopup.pcf: line 261, column 54
    function value_161 () : java.lang.String {
      return VehicleIncident.Description
    }
    
    // 'value' attribute on BooleanRadioInput (id=TotalLoss_Input) at FNOLVehicleIncidentPopup.pcf: line 266, column 51
    function value_167 () : java.lang.Boolean {
      return VehicleIncident.TotalLoss
    }
    
    // 'value' attribute on TextInput (id=TotalLossPoints_Input) at FNOLVehicleIncidentPopup.pcf: line 276, column 48
    function value_171 () : java.lang.Integer {
      return VehicleIncident.TotalLossPoints
    }
    
    // 'value' attribute on TypeKeyRadioInput (id=GlassRepairAndReplaceRadioButton_Ext_Input) at FNOLVehicleIncidentPopup.pcf: line 282, column 63
    function value_174 () : typekey.GlassRepairAndReplace_Ext {
      return VehicleIncident.GlassRepairAndReplace_Ext
    }
    
    // 'value' attribute on BooleanRadioInput (id=Operable_Input) at FNOLVehicleIncidentPopup.pcf: line 287, column 58
    function value_178 () : java.lang.Boolean {
      return VehicleIncident.VehicleOperable
    }
    
    // 'value' attribute on TextInput (id=Theft_OdomRead_Input) at FNOLVehicleIncidentPopup.pcf: line 294, column 32
    function value_182 () : java.lang.Integer {
      return VehicleIncident.OdomRead
    }
    
    // 'value' attribute on BooleanRadioInput (id=Exposure_AirbagsDeployed_Input) at FNOLVehicleIncidentPopup.pcf: line 302, column 57
    function value_188 () : java.lang.Boolean {
      return VehicleIncident.AirbagsDeployed
    }
    
    // 'value' attribute on BooleanRadioInput (id=Exposure_EquipmentFailure_Input) at FNOLVehicleIncidentPopup.pcf: line 311, column 58
    function value_194 () : java.lang.Boolean {
      return VehicleIncident.EquipmentFailure
    }
    
    // 'value' attribute on TextInput (id=Speed_Input) at FNOLVehicleIncidentPopup.pcf: line 326, column 93
    function value_200 () : java.lang.Integer {
      return VehicleIncident.Speed
    }
    
    // 'value' attribute on TypeKeyInput (id=VehicleDirection_Input) at FNOLVehicleIncidentPopup.pcf: line 333, column 93
    function value_206 () : typekey.VehicleDirection {
      return VehicleIncident.VehicleDirection
    }
    
    // 'value' attribute on TypeKeyInput (id=CollisionPoint_Input) at FNOLVehicleIncidentPopup.pcf: line 340, column 58
    function value_212 () : typekey.CollisionPoint {
      return VehicleIncident.CollisionPoint
    }
    
    // 'value' attribute on BooleanRadioInput (id=LoanInformation_Loan_Input) at FNOLVehicleIncidentPopup.pcf: line 345, column 54
    function value_217 () : java.lang.Boolean {
      return VehicleIncident.Vehicle.Loan
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_VehicleType_Input) at FNOLVehicleIncidentPopup.pcf: line 91, column 99
    function value_22 () : typekey.VehicleType {
      return VehicleIncident.VehicleType
    }
    
    // 'value' attribute on CurrencyInput (id=MonthlyPayment_Input) at FNOLVehicleIncidentPopup.pcf: line 353, column 68
    function value_222 () : gw.api.financials.CurrencyAmount {
      return VehicleIncident.Vehicle.LoanMonthlyPayment
    }
    
    // 'value' attribute on TextInput (id=MonthsRemaining_Input) at FNOLVehicleIncidentPopup.pcf: line 360, column 67
    function value_228 () : java.lang.Integer {
      return VehicleIncident.Vehicle.LoanMonthsRemaining
    }
    
    // 'value' attribute on CurrencyInput (id=PayoffAmount_Input) at FNOLVehicleIncidentPopup.pcf: line 366, column 67
    function value_234 () : gw.api.financials.CurrencyAmount {
      return VehicleIncident.Vehicle.LoanPayoffAmount
    }
    
    // 'value' attribute on RowIterator at FNOLVehicleIncidentPopup.pcf: line 417, column 50
    function value_259 () : entity.Contact[] {
      return VehicleIncident.getContactsByRoles( {ContactRole.TC_DRIVER, ContactRole.TC_PASSENGER} )
    }
    
    // 'value' attribute on BooleanRadioInput (id=Theft_VehLockInd_Input) at FNOLVehicleIncidentPopup.pcf: line 458, column 52
    function value_261 () : java.lang.Boolean {
      return VehicleIncident.VehLockInd
    }
    
    // 'value' attribute on BooleanRadioInput (id=Theft_AntiThftInd_Input) at FNOLVehicleIncidentPopup.pcf: line 465, column 53
    function value_265 () : java.lang.Boolean {
      return VehicleIncident.AntiThftInd
    }
    
    // 'value' attribute on TypeKeyInput (id=Theft_AffdvCmplInd_Input) at FNOLVehicleIncidentPopup.pcf: line 474, column 43
    function value_269 () : typekey.YesNo {
      return VehicleIncident.AffdvCmplInd
    }
    
    // 'value' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_284 () : entity.Contact {
      return VehicleIncident.InsuredRep
    }
    
    // 'value' attribute on TypeKeyInput (id=LocationType_Ext_Input) at FNOLVehicleIncidentPopup.pcf: line 509, column 39
    function value_297 () : typekey.VehicleDamageLocation_Ext {
      return VehicleIncident.LocationType_Ext
    }
    
    // 'value' attribute on TextInput (id=Address_Description_Ext_Input) at FNOLVehicleIncidentPopup.pcf: line 519, column 59
    function value_306 () : java.lang.String {
      return addressOwner.Address.Description
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Year_Input) at FNOLVehicleIncidentPopup.pcf: line 106, column 54
    function value_32 () : java.lang.Integer {
      return VehicleIncident.Vehicle.Year
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Make_Input) at FNOLVehicleIncidentPopup.pcf: line 119, column 54
    function value_43 () : java.lang.String {
      return VehicleIncident.Vehicle.Make
    }
    
    // 'value' attribute on BooleanRadioInput (id=LossParty_Input) at FNOLVehicleIncidentPopup.pcf: line 62, column 37
    function value_5 () : java.lang.Boolean {
      return InsurerLoss
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Model_Input) at FNOLVehicleIncidentPopup.pcf: line 132, column 54
    function value_54 () : java.lang.String {
      return VehicleIncident.Vehicle.Model
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_Style_Input) at FNOLVehicleIncidentPopup.pcf: line 146, column 54
    function value_65 () : typekey.VehicleStyle {
      return VehicleIncident.Vehicle.Style
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Color_Input) at FNOLVehicleIncidentPopup.pcf: line 159, column 54
    function value_76 () : java.lang.String {
      return VehicleIncident.Vehicle.Color
    }
    
    // 'value' attribute on TextInput (id=Vehicle_LicensePlate_Input) at FNOLVehicleIncidentPopup.pcf: line 171, column 54
    function value_87 () : java.lang.String {
      return VehicleIncident.Vehicle.LicensePlate
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_State_Input) at FNOLVehicleIncidentPopup.pcf: line 185, column 56
    function value_98 () : typekey.Jurisdiction {
      return VehicleIncident.Vehicle.State
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_146 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_146 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_146 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Picker_Input) at FNOLVehicleIncidentPopup.pcf: line 75, column 39
    function verifyValueRangeIsAllowedType_16 ($$arg :  entity.Vehicle[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Picker_Input) at FNOLVehicleIncidentPopup.pcf: line 75, column 39
    function verifyValueRangeIsAllowedType_16 ($$arg :  gw.api.database.IQueryBeanResult<entity.Vehicle>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Picker_Input) at FNOLVehicleIncidentPopup.pcf: line 75, column 39
    function verifyValueRangeIsAllowedType_16 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_288 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_288 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_288 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_147 () : void {
      var __valueRangeArg = Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_146(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Picker_Input) at FNOLVehicleIncidentPopup.pcf: line 75, column 39
    function verifyValueRange_17 () : void {
      var __valueRangeArg = VehicleIncident.AvailableVehicles
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_16(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_289 () : void {
      var __valueRangeArg = Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_288(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=Vehicle_VIN_Input) at FNOLVehicleIncidentPopup.pcf: line 197, column 235
    function visible_109 () : java.lang.Boolean {
      return (!InsurerLoss or NewVehicle) and VehicleIncident.Vehicle.Style != VehicleStyle.TC_BOAT and VehicleIncident.Vehicle.Style != VehicleStyle.TC_ATV and VehicleIncident.Vehicle.Style != VehicleStyle.TC_SNOWMOBILE
    }
    
    // 'visible' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_132 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_135 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (VehicleIncident.incidentowner), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on BooleanRadioInput (id=Exposure_AirbagsDeployed_Input) at FNOLVehicleIncidentPopup.pcf: line 302, column 57
    function visible_187 () : java.lang.Boolean {
      return !VehicleIncident.VehStolenInd
    }
    
    // 'visible' attribute on TextInput (id=Speed_Input) at FNOLVehicleIncidentPopup.pcf: line 326, column 93
    function visible_199 () : java.lang.Boolean {
      return !(VehicleIncident.VehStolenInd or VehicleIncident.VehicleParked)
    }
    
    // 'visible' attribute on TypeKeyInput (id=Vehicle_VehicleType_Input) at FNOLVehicleIncidentPopup.pcf: line 91, column 99
    function visible_21 () : java.lang.Boolean {
      return NewVehicle or VehicleIncident.LossParty == LossPartyType.TC_THIRD_PARTY
    }
    
    // 'visible' attribute on CurrencyInput (id=MonthlyPayment_Input) at FNOLVehicleIncidentPopup.pcf: line 353, column 68
    function visible_221 () : java.lang.Boolean {
      return  VehicleIncident.Vehicle.Loan == true  
    }
    
    // 'visible' attribute on TextInput (id=MonthsRemaining_Input) at FNOLVehicleIncidentPopup.pcf: line 360, column 67
    function visible_227 () : java.lang.Boolean {
      return  VehicleIncident.Vehicle.Loan == true 
    }
    
    // 'visible' attribute on ToolbarButton (id=AddDriverButton) at FNOLVehicleIncidentPopup.pcf: line 397, column 63
    function visible_242 () : java.lang.Boolean {
      return VehicleIncident.driver == null
    }
    
    // 'visible' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_276 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (VehicleIncident.InsuredRep), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function visible_280 () : java.lang.Boolean {
      return VehicleIncident.AffdvCmplInd == TC_YES
    }
    
    // 'visible' attribute on TextInput (id=Vehicle_Year_Input) at FNOLVehicleIncidentPopup.pcf: line 106, column 54
    function visible_31 () : java.lang.Boolean {
      return !InsurerLoss or NewVehicle
    }
    
    // 'visible' attribute on TypeKeyInput (id=Vehicle_State_Input) at FNOLVehicleIncidentPopup.pcf: line 185, column 56
    function visible_97 () : java.lang.Boolean {
      return (!InsurerLoss or NewVehicle)
    }
    
    property get Claim () : Claim {
      return getVariableValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setVariableValue("Claim", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.FNOLVehicleIncidentPopup {
      return super.CurrentLocation as pcf.FNOLVehicleIncidentPopup
    }
    
    property get InsurerLoss () : boolean {
      return getVariableValue("InsurerLoss", 0) as java.lang.Boolean
    }
    
    property set InsurerLoss ($arg :  boolean) {
      setVariableValue("InsurerLoss", 0, $arg)
    }
    
    property get NewVehicle () : boolean {
      return getVariableValue("NewVehicle", 0) as java.lang.Boolean
    }
    
    property set NewVehicle ($arg :  boolean) {
      setVariableValue("NewVehicle", 0, $arg)
    }
    
    property get VehicleIncident () : VehicleIncident {
      return getVariableValue("VehicleIncident", 0) as VehicleIncident
    }
    
    property set VehicleIncident ($arg :  VehicleIncident) {
      setVariableValue("VehicleIncident", 0, $arg)
    }
    
    property get Wizard () : gw.api.claim.NewClaimWizardInfo {
      return getVariableValue("Wizard", 0) as gw.api.claim.NewClaimWizardInfo
    }
    
    property set Wizard ($arg :  gw.api.claim.NewClaimWizardInfo) {
      setVariableValue("Wizard", 0, $arg)
    }
    
    property get addressOwner () : gw.api.address.CCAddressOwner {
      return getVariableValue("addressOwner", 0) as gw.api.address.CCAddressOwner
    }
    
    property set addressOwner ($arg :  gw.api.address.CCAddressOwner) {
      setVariableValue("addressOwner", 0, $arg)
    }
    
    property get vehicleIncidentOtherServiceRequestsCopy () : java.util.Set<ServiceRequest> {
      return getVariableValue("vehicleIncidentOtherServiceRequestsCopy", 0) as java.util.Set<ServiceRequest>
    }
    
    property set vehicleIncidentOtherServiceRequestsCopy ($arg :  java.util.Set<ServiceRequest>) {
      setVariableValue("vehicleIncidentOtherServiceRequestsCopy", 0, $arg)
    }
    
    
    function initializeVariable() {
      if (Claim == null) {
        Claim = VehicleIncident.getClaim()
      }
      if (VehicleIncident == null) {
        VehicleIncident = new VehicleIncident()
        VehicleIncident.Vehicle = new Vehicle()
        NewVehicle = true
        if (Claim.VehicleIncidentsOnly.length == 0) {
          InsurerLoss = true
          VehicleIncident.LossParty = LossPartyType.TC_INSURED
        } else if(gw.config.LOBAbstraction.ForClaim.ForLossType.isTravel(Claim)) {
          //Travel vehicle incidents should default to 3rd party
          InsurerLoss = false
          VehicleIncident.LossParty = LossPartyType.TC_THIRD_PARTY
        } else {
          InsurerLoss = false
          VehicleIncident.LossParty = LossPartyType.TC_THIRD_PARTY
        }
        Claim.addToIncidents(VehicleIncident)
      }
      else {
        InsurerLoss = checkForIncident()
      }
      addressOwner = VehicleIncident.VehicleAddressOwner_Ext
    }
    
    function checkForIncident() : boolean {
      if (VehicleIncident.LossParty == LossPartyType.TC_INSURED) {
        return true
      } else if (VehicleIncident.LossParty == LossPartyType.TC_THIRD_PARTY) {
        return false
      } else {
        for (currentVehicle in Claim.Policy.Vehicles) {
          if ((currentVehicle).Vehicle == VehicleIncident.Vehicle) {
            VehicleIncident.LossParty = LossPartyType.TC_INSURED
            return true
          }
        }
        VehicleIncident.LossParty = LossPartyType.TC_THIRD_PARTY
        return false
      }
    }
    
    /**
     * Removes any orphaned injury incidents that were created that no longer have any involvement
     * with the vehicle incident.  Also finishes initializing any service requests that were created.
     */
    function cleanBeforeCommit() {
      // Travel LOB does not need to remove the injury incidents
      if (not gw.config.LOBAbstraction.ForClaim.ForLossType.isTravel(VehicleIncident.Claim)) {
        var involvedPersons = new java.util.HashSet<Contact>()
        var injuryIncidents = VehicleIncident.Claim.InjuryIncidentsOnly
    
        // retrieve a list of all drivers and passegners on the all vehicle incidents
        Claim.VehicleIncidentsOnly.each(\ v -> v.getContactsByRoles( {ContactRole.TC_DRIVER, ContactRole.TC_PASSENGER} ).each(\ c -> involvedPersons.add(c)))
        Claim.getContactsByRole(ContactRole.TC_PEDESTRIAN).each(\ c-> involvedPersons.add(c))
    
        injuryIncidents.each( \ ii -> {
          // if the injured person for the incident is not related to any contacts on a vehicle incidents, remove it.
          if (!involvedPersons.contains( ii.injured )) {
            Claim.removeFromIncidents( ii )
            gw.api.claim.FnolServiceRequestHelper.removeIncidentServiceRequests(ii, Wizard)
          }
        })
      }
    
      FnolServiceRequestHelper.cleanAndFinishServiceRequests(Wizard)
    }
    
    function removeContact(contact : Contact) {
      if (VehicleIncident.driver == contact) {
        VehicleIncident.driver = null
      } else {
        VehicleIncident.removeRole( ContactRole.TC_PASSENGER, contact )
      }
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/claim/FNOL/FNOLVehicleIncidentPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FNOLVehicleIncidentPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=name_Cell) at FNOLVehicleIncidentPopup.pcf: line 438, column 249
    function action_252 () : void {
      FNOLContactPopup.push(Claim, Claim.getClaimContact(ContactPerson), typekey.ContactRole.get(VehicleIncident.driver == ContactPerson ? "driver" : "passenger"), VehicleIncident, Wizard)
    }
    
    // 'action' attribute on TextCell (id=name_Cell) at FNOLVehicleIncidentPopup.pcf: line 438, column 249
    function action_dest_253 () : pcf.api.Destination {
      return pcf.FNOLContactPopup.createDestination(Claim, Claim.getClaimContact(ContactPerson), typekey.ContactRole.get(VehicleIncident.driver == ContactPerson ? "driver" : "passenger"), VehicleIncident, Wizard)
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=RoleIcon_Cell) at FNOLVehicleIncidentPopup.pcf: line 433, column 46
    function iconLabel_250 () : java.lang.String {
      return VehicleIncident.driver == ContactPerson ? DisplayKey.get("Web.FNOLVehicleIncidentPopup.DriverIcon.Label") : DisplayKey.get("Web.FNOLVehicleIncidentPopup.PassengerIcon.Label")
    }
    
    // 'icon' attribute on BooleanRadioCell (id=InjuredIcon_Cell) at FNOLVehicleIncidentPopup.pcf: line 425, column 89
    function icon_248 () : java.lang.String {
      return Wizard.getInjurySeverity(Claim.getClaimContact(ContactPerson)) == SeverityType.TC_FATAL ? "fatality" : "injury"
    }
    
    // 'icon' attribute on BooleanRadioCell (id=RoleIcon_Cell) at FNOLVehicleIncidentPopup.pcf: line 433, column 46
    function icon_251 () : java.lang.String {
      return VehicleIncident.driver == ContactPerson ? "driver" : "passenger"
    }
    
    // 'value' attribute on BooleanRadioCell (id=InjuredIcon_Cell) at FNOLVehicleIncidentPopup.pcf: line 425, column 89
    function value_247 () : java.lang.Boolean {
      return Wizard.isInjured(Claim.getClaimContact(ContactPerson))
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at FNOLVehicleIncidentPopup.pcf: line 438, column 249
    function value_254 () : java.lang.String {
      return DisplayKey.get("Web.FNOLVehicleIncidentPopup.NamePosition", ContactPerson.DisplayName, (VehicleIncident.driver == ContactPerson ? ContactRole.TC_DRIVER.DisplayName : ContactRole.TC_PASSENGER.DisplayName))
    }
    
    // 'value' attribute on TextCell (id=Injuries_Cell) at FNOLVehicleIncidentPopup.pcf: line 442, column 102
    function value_256 () : java.lang.String {
      return Wizard.getInjuryDescription( Claim.getClaimContact(ContactPerson) )
    }
    
    property get ContactPerson () : entity.Contact {
      return getIteratedValue(1) as entity.Contact
    }
    
    
  }
  
  
}