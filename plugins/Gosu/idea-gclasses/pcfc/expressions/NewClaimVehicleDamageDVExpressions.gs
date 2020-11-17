package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/FNOL/NewClaimVehicleDamageDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewClaimVehicleDamageDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/FNOL/NewClaimVehicleDamageDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewClaimVehicleDamageDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_17 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_19 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at NewClaimVehicleDamageDV.pcf: line 48, column 63
    function action_27 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_41 () : void {
      AddressBookPickerPopup.push(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_43 () : void {
      if (Exposure.Claimant != null) { ClaimContactDetailPopup.push(Exposure.Claimant, Exposure.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_46 () : void {
      ClaimContactDetailPopup.push(Exposure.Claimant, Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=NewClaimVehicleDamageDV_NewIncidentMenuItem) at NewClaimVehicleDamageDV.pcf: line 135, column 112
    function action_77 () : void {
      NewVehicleIncidentPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=NewClaimVehicleDamageDV_EditIncidentMenuItem) at NewClaimVehicleDamageDV.pcf: line 139, column 113
    function action_79 () : void {
      EditVehicleIncidentPopup.push(Exposure.VehicleIncident, true)
    }
    
    // 'action' attribute on MenuItem (id=StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_18 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_20 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at NewClaimVehicleDamageDV.pcf: line 48, column 63
    function action_dest_28 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_42 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_47 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Exposure.Claimant, Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=NewClaimVehicleDamageDV_NewIncidentMenuItem) at NewClaimVehicleDamageDV.pcf: line 135, column 112
    function action_dest_78 () : pcf.api.Destination {
      return pcf.NewVehicleIncidentPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=NewClaimVehicleDamageDV_EditIncidentMenuItem) at NewClaimVehicleDamageDV.pcf: line 139, column 113
    function action_dest_80 () : pcf.api.Destination {
      return pcf.EditVehicleIncidentPopup.createDestination(Exposure.VehicleIncident, true)
    }
    
    // 'def' attribute on ListViewInput at NewClaimVehicleDamageDV.pcf: line 187, column 118
    function def_onEnter_112 (def :  pcf.EditableOtherCoverageDetailsLV) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_38 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Exposure.Claimant), null, Exposure.Claim)
    }
    
    // 'def' attribute on ListViewInput at NewClaimVehicleDamageDV.pcf: line 187, column 118
    function def_refreshVariables_113 (def :  pcf.EditableOtherCoverageDetailsLV) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_39 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Exposure.Claimant), null, Exposure.Claim)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage_Input) at NewClaimVehicleDamageDV.pcf: line 183, column 41
    function defaultSetter_109 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.OtherCoverage = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=Coverage_Input) at NewClaimVehicleDamageDV.pcf: line 36, column 37
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Coverage = (__VALUE_TO_SET as entity.Coverage)
    }
    
    // 'value' attribute on TypeKeyInput (id=RepresentationLevel_Ext_Input) at NewClaimVehicleDamageDV.pcf: line 200, column 54
    function defaultSetter_115 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.RepresentationLevel_Ext = (__VALUE_TO_SET as typekey.RepresentationLevel_Ext)
    }
    
    // 'value' attribute on TypeKeyInput (id=EscalationLevel_Ext_Input) at NewClaimVehicleDamageDV.pcf: line 206, column 50
    function defaultSetter_119 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.EscalationLevel_Ext = (__VALUE_TO_SET as typekey.EscalationLevel_Ext)
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.StatLine = (__VALUE_TO_SET as entity.StatCode)
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_50 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claimant = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claimant_Type_Input) at NewClaimVehicleDamageDV.pcf: line 85, column 42
    function defaultSetter_60 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.ClaimantType = (__VALUE_TO_SET as typekey.ClaimantType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactProhibited_Input) at NewClaimVehicleDamageDV.pcf: line 100, column 36
    function defaultSetter_64 (__VALUE_TO_SET :  java.lang.Object) : void {
      ContactProhibited = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=Vehicle_Incident_Input) at NewClaimVehicleDamageDV.pcf: line 128, column 44
    function defaultSetter_82 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.VehicleIncident = (__VALUE_TO_SET as entity.VehicleIncident)
    }
    
    // 'onChange' attribute on PostOnChange at NewClaimVehicleDamageDV.pcf: line 38, column 105
    function onChange_9 () : void {
      ext.config.exposure.ExposureUIHelper.checkThatIncidentExistsForCoverage(Exposure)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_48 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Exposure.Claimant); var result = eval("Exposure.Claimant = Exposure.Claim.resolveContact(Exposure.Claimant) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'value' attribute on Reflect at NewClaimVehicleDamageDV.pcf: line 172, column 39
    function reflectionValue_103 (TRIGGER_INDEX :  int, VALUE :  entity.VehicleIncident) : java.lang.Object {
      return VALUE.LossEstimate
    }
    
    // ClaimContactInput (id=Claimant_Picker_Input) at NewClaimVehicleDamageDV.pcf: line 70, column 34
    function reflectionValue_45 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return (VALUE == TC_INSURED) ? (Exposure.Claim.Insured) : (true) ? ("") : "<NOCHANGE>"
    }
    
    // Reflect at NewClaimVehicleDamageDV.pcf: line 87, column 40
    function reflectionValue_58 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return (Exposure.Claim.Insured==VALUE) ? ("insured") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'value' attribute on Reflect at NewClaimVehicleDamageDV.pcf: line 107, column 44
    function reflectionValue_66 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // 'value' attribute on Reflect at NewClaimVehicleDamageDV.pcf: line 115, column 53
    function reflectionValue_71 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on Reflect at NewClaimVehicleDamageDV.pcf: line 148, column 33
    function reflectionValue_88 (TRIGGER_INDEX :  int, VALUE :  entity.VehicleIncident) : java.lang.Object {
      return VALUE.driver
    }
    
    // 'value' attribute on Reflect at NewClaimVehicleDamageDV.pcf: line 156, column 38
    function reflectionValue_93 (TRIGGER_INDEX :  int, VALUE :  entity.VehicleIncident) : java.lang.Object {
      return VALUE.Description
    }
    
    // 'value' attribute on Reflect at NewClaimVehicleDamageDV.pcf: line 164, column 42
    function reflectionValue_98 (TRIGGER_INDEX :  int, VALUE :  entity.VehicleIncident) : java.lang.Object {
      return VALUE.VehicleOperable
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at NewClaimVehicleDamageDV.pcf: line 36, column 37
    function valueRange_13 () : java.lang.Object {
      return Exposure.Claim.Policy.getCoveragesByCoverageType(Exposure.PrimaryCoverage)
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function valueRange_24 () : java.lang.Object {
      return Exposure.Claim.Policy.CappedStatCodes
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_52 () : java.lang.Object {
      return Exposure.Claim.RelatedContacts
    }
    
    // 'valueRange' attribute on Reflect at NewClaimVehicleDamageDV.pcf: line 131, column 82
    function valueRange_76 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return Exposure.getVehicleIncidentsWithMatchingLossParty(VALUE)
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Incident_Input) at NewClaimVehicleDamageDV.pcf: line 128, column 44
    function valueRange_84 () : java.lang.Object {
      return Exposure.getVehicleIncidentsWithMatchingLossParty(Exposure.LossParty)
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at NewClaimVehicleDamageDV.pcf: line 18, column 44
    function valueRoot_1 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TextInput (id=Claimant_PrimaryPhone_Input) at NewClaimVehicleDamageDV.pcf: line 104, column 53
    function valueRoot_69 () : java.lang.Object {
      return Exposure.Claimant
    }
    
    // 'value' attribute on TextInput (id=Incident_Driver_Input) at NewClaimVehicleDamageDV.pcf: line 145, column 35
    function valueRoot_91 () : java.lang.Object {
      return Exposure.VehicleIncident
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at NewClaimVehicleDamageDV.pcf: line 18, column 44
    function value_0 () : typekey.LossPartyType {
      return Exposure.LossParty
    }
    
    // 'value' attribute on RangeInput (id=Coverage_Input) at NewClaimVehicleDamageDV.pcf: line 36, column 37
    function value_10 () : entity.Coverage {
      return Exposure.Coverage
    }
    
    // 'value' attribute on BooleanRadioInput (id=Incident_VehicleOperable_Input) at NewClaimVehicleDamageDV.pcf: line 161, column 58
    function value_100 () : java.lang.Boolean {
      return Exposure.VehicleIncident.VehicleOperable
    }
    
    // 'value' attribute on CurrencyInput (id=Incident_LossEstimate_Input) at NewClaimVehicleDamageDV.pcf: line 169, column 55
    function value_105 () : gw.api.financials.CurrencyAmount {
      return Exposure.VehicleIncident.LossEstimate
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage_Input) at NewClaimVehicleDamageDV.pcf: line 183, column 41
    function value_108 () : java.lang.Boolean {
      return Exposure.OtherCoverage
    }
    
    // 'value' attribute on TypeKeyInput (id=RepresentationLevel_Ext_Input) at NewClaimVehicleDamageDV.pcf: line 200, column 54
    function value_114 () : typekey.RepresentationLevel_Ext {
      return Exposure.RepresentationLevel_Ext
    }
    
    // 'value' attribute on TypeKeyInput (id=EscalationLevel_Ext_Input) at NewClaimVehicleDamageDV.pcf: line 206, column 50
    function value_118 () : typekey.EscalationLevel_Ext {
      return Exposure.EscalationLevel_Ext
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function value_21 () : entity.StatCode {
      return Exposure.StatLine
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryCoverage_Input) at NewClaimVehicleDamageDV.pcf: line 23, column 43
    function value_3 () : typekey.CoverageType {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TextInput (id=StatLine_Warning_Input) at NewClaimVehicleDamageDV.pcf: line 55, column 65
    function value_33 () : java.lang.String {
      return DisplayKey.get("Java.StatCodes.StatCodeListCappedWarning", Exposure.Claim.Policy.StatCodeListCap, Exposure.Claim.Policy.StatCodes.length)
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at NewClaimVehicleDamageDV.pcf: line 73, column 45
    function value_44 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return Exposure.Claim.Insured
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_49 () : entity.Contact {
      return Exposure.Claimant
    }
    
    // 'value' attribute on TypeKeyInput (id=Claimant_Type_Input) at NewClaimVehicleDamageDV.pcf: line 85, column 42
    function value_59 () : typekey.ClaimantType {
      return Exposure.ClaimantType
    }
    
    // 'value' attribute on TypeKeyInput (id=CoverageSubType_Input) at NewClaimVehicleDamageDV.pcf: line 28, column 46
    function value_6 () : typekey.CoverageSubtype {
      return Exposure.CoverageSubType
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactProhibited_Input) at NewClaimVehicleDamageDV.pcf: line 100, column 36
    function value_63 () : java.lang.Boolean {
      return ContactProhibited
    }
    
    // 'value' attribute on TextInput (id=Claimant_PrimaryPhone_Input) at NewClaimVehicleDamageDV.pcf: line 104, column 53
    function value_68 () : java.lang.String {
      return Exposure.Claimant.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextInput (id=Claimant_Address_Input) at NewClaimVehicleDamageDV.pcf: line 112, column 62
    function value_73 () : java.lang.String {
      return Exposure.Claimant.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on RangeInput (id=Vehicle_Incident_Input) at NewClaimVehicleDamageDV.pcf: line 128, column 44
    function value_81 () : entity.VehicleIncident {
      return Exposure.VehicleIncident
    }
    
    // 'value' attribute on TextInput (id=Incident_Driver_Input) at NewClaimVehicleDamageDV.pcf: line 145, column 35
    function value_90 () : entity.Person {
      return Exposure.VehicleIncident.driver
    }
    
    // 'value' attribute on TextInput (id=Incident_Description_Input) at NewClaimVehicleDamageDV.pcf: line 153, column 54
    function value_95 () : java.lang.String {
      return Exposure.VehicleIncident.Description
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at NewClaimVehicleDamageDV.pcf: line 36, column 37
    function verifyValueRangeIsAllowedType_14 ($$arg :  entity.Coverage[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at NewClaimVehicleDamageDV.pcf: line 36, column 37
    function verifyValueRangeIsAllowedType_14 ($$arg :  gw.api.database.IQueryBeanResult<entity.Coverage>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at NewClaimVehicleDamageDV.pcf: line 36, column 37
    function verifyValueRangeIsAllowedType_14 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_25 ($$arg :  entity.StatCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_25 ($$arg :  gw.api.database.IQueryBeanResult<entity.StatCode>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_25 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_53 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_53 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_53 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Incident_Input) at NewClaimVehicleDamageDV.pcf: line 128, column 44
    function verifyValueRangeIsAllowedType_85 ($$arg :  entity.VehicleIncident[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Incident_Input) at NewClaimVehicleDamageDV.pcf: line 128, column 44
    function verifyValueRangeIsAllowedType_85 ($$arg :  gw.api.database.IQueryBeanResult<entity.VehicleIncident>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Incident_Input) at NewClaimVehicleDamageDV.pcf: line 128, column 44
    function verifyValueRangeIsAllowedType_85 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at NewClaimVehicleDamageDV.pcf: line 36, column 37
    function verifyValueRange_15 () : void {
      var __valueRangeArg = Exposure.Claim.Policy.getCoveragesByCoverageType(Exposure.PrimaryCoverage)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_14(__valueRangeArg)
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRange_26 () : void {
      var __valueRangeArg = Exposure.Claim.Policy.CappedStatCodes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_25(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_54 () : void {
      var __valueRangeArg = Exposure.Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_53(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Incident_Input) at NewClaimVehicleDamageDV.pcf: line 128, column 44
    function verifyValueRange_86 () : void {
      var __valueRangeArg = Exposure.getVehicleIncidentsWithMatchingLossParty(Exposure.LossParty)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_85(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=StatLine_Warning_Input) at NewClaimVehicleDamageDV.pcf: line 55, column 65
    function visible_32 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodeListCapped
    }
    
    // 'visible' attribute on InputSet at NewClaimVehicleDamageDV.pcf: line 41, column 59
    function visible_36 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodingEnabled
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_37 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_40 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get Exposure () : Exposure {
      return getRequireValue("Exposure", 0) as Exposure
    }
    
    property set Exposure ($arg :  Exposure) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    
    property get ContactProhibited() : Boolean {
        return Exposure.Claim.getClaimContact(Exposure.Claimant).ContactProhibited
    }
      
    property set ContactProhibited(prohibited : Boolean) {
      var claimContact = Exposure.Claim.getClaimContact(Exposure.Claimant) 
      if (claimContact != null) claimContact.ContactProhibited = prohibited 
    }
        
    
    
  }
  
  
}