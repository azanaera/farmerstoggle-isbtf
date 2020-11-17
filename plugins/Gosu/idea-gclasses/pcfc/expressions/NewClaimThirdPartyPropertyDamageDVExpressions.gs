package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses java.util.Set
@javax.annotation.processing.Generated("config/web/pcf/claim/FNOL/NewClaimThirdPartyPropertyDamageDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewClaimThirdPartyPropertyDamageDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/FNOL/NewClaimThirdPartyPropertyDamageDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewClaimThirdPartyPropertyDamageDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=Exposure_StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_19 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_21 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 58, column 63
    function action_29 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_43 () : void {
      AddressBookPickerPopup.push(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_45 () : void {
      if (Exposure.Claimant != null) { ClaimContactDetailPopup.push(Exposure.Claimant, Exposure.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_48 () : void {
      ClaimContactDetailPopup.push(Exposure.Claimant, Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=Exposure_StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_20 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_22 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 58, column 63
    function action_dest_30 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_44 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_49 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Exposure.Claimant, Exposure.Claim)
    }
    
    // 'def' attribute on ListViewInput at NewClaimThirdPartyPropertyDamageDV.pcf: line 183, column 129
    function def_onEnter_110 (def :  pcf.EditableOtherCoverageDetailsLV) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on InputSetRef (id=AppraisalServiceInputSet) at NewClaimThirdPartyPropertyDamageDV.pcf: line 204, column 40
    function def_onEnter_116 (def :  pcf.AppraisalServiceInputSet) : void {
      def.onEnter(AppraisalServiceRequest, Exposure.MobilePropertyIncident, unusedServiceRequests, appraisalIncidentCode)
    }
    
    // 'def' attribute on InputSetRef at NewClaimThirdPartyPropertyDamageDV.pcf: line 206, column 193
    function def_onEnter_118 (def :  pcf.OtherServicesLVInputGroupInputSet) : void {
      def.onEnter(Exposure.MobilePropertyIncident.Claim, Exposure.MobilePropertyIncident, otherServiceRequests, otherServiceRequests, unusedServiceRequests, {})
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_40 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Exposure.Claimant), null, Exposure.Claim)
    }
    
    // 'def' attribute on ListViewInput at NewClaimThirdPartyPropertyDamageDV.pcf: line 183, column 129
    function def_refreshVariables_111 (def :  pcf.EditableOtherCoverageDetailsLV) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on InputSetRef (id=AppraisalServiceInputSet) at NewClaimThirdPartyPropertyDamageDV.pcf: line 204, column 40
    function def_refreshVariables_117 (def :  pcf.AppraisalServiceInputSet) : void {
      def.refreshVariables(AppraisalServiceRequest, Exposure.MobilePropertyIncident, unusedServiceRequests, appraisalIncidentCode)
    }
    
    // 'def' attribute on InputSetRef at NewClaimThirdPartyPropertyDamageDV.pcf: line 206, column 193
    function def_refreshVariables_119 (def :  pcf.OtherServicesLVInputGroupInputSet) : void {
      def.refreshVariables(Exposure.MobilePropertyIncident.Claim, Exposure.MobilePropertyIncident, otherServiceRequests, otherServiceRequests, unusedServiceRequests, {})
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_41 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Exposure.Claimant), null, Exposure.Claim)
    }
    
    // 'value' attribute on TextInput (id=EstimateTime_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 170, column 80
    function defaultSetter_102 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.MobilePropertyIncident.EstRepairTime = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 179, column 41
    function defaultSetter_107 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.OtherCoverage = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=Exposure_Coverage_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 46, column 37
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Coverage = (__VALUE_TO_SET as entity.Coverage)
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.StatLine = (__VALUE_TO_SET as entity.StatCode)
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_52 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claimant = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claimant_Type_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 95, column 42
    function defaultSetter_62 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.ClaimantType = (__VALUE_TO_SET as typekey.ClaimantType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactProhibited_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 110, column 36
    function defaultSetter_66 (__VALUE_TO_SET :  java.lang.Object) : void {
      ContactProhibited = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=PropertyDescription_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 134, column 63
    function defaultSetter_79 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.MobilePropertyIncident.PropertyDesc = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 140, column 48
    function defaultSetter_83 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Incident.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CurrencyInput (id=LossEstimate_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 145, column 49
    function defaultSetter_87 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Incident.LossEstimate = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TypeKeyInput (id=EstimatedReceived_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 156, column 35
    function defaultSetter_91 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.MobilePropertyIncident.EstimatesReceived = (__VALUE_TO_SET as typekey.YesNo)
    }
    
    // 'value' attribute on CurrencyInput (id=EstimateCost_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 164, column 80
    function defaultSetter_96 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.MobilePropertyIncident.EstRepairCost = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'initialValue' attribute on Variable at NewClaimThirdPartyPropertyDamageDV.pcf: line 16, column 22
    function initialValue_0 () : String {
      return gw.vendormanagement.SpecialistServiceCodeConstants.PROPINSPECTAPPRAISAL
    }
    
    // 'initialValue' attribute on Variable at NewClaimThirdPartyPropertyDamageDV.pcf: line 20, column 51
    function initialValue_1 () : java.util.Set<ServiceRequest> {
      return createOtherServiceRequests()
    }
    
    // 'onChange' attribute on PostOnChange at NewClaimThirdPartyPropertyDamageDV.pcf: line 48, column 105
    function onChange_11 () : void {
      ext.config.exposure.ExposureUIHelper.checkThatIncidentExistsForCoverage(Exposure)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_50 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Exposure.Claimant); var result = eval("Exposure.Claimant = Exposure.Claim.resolveContact(Exposure.Claimant) as " + contactType.Name + ";return null;"); ;
    }
    
    // ClaimContactInput (id=Claimant_Picker_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 80, column 43
    function reflectionValue_47 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return (VALUE == TC_INSURED) ? (Exposure.Claim.Insured) : (true) ? ("") : "<NOCHANGE>"
    }
    
    // Reflect at NewClaimThirdPartyPropertyDamageDV.pcf: line 97, column 40
    function reflectionValue_60 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return (Exposure.Claim.Insured==VALUE) ? ("insured") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'value' attribute on Reflect at NewClaimThirdPartyPropertyDamageDV.pcf: line 117, column 44
    function reflectionValue_68 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // 'value' attribute on Reflect at NewClaimThirdPartyPropertyDamageDV.pcf: line 125, column 53
    function reflectionValue_73 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // 'valueRange' attribute on RangeInput (id=Exposure_Coverage_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 46, column 37
    function valueRange_15 () : java.lang.Object {
      return Exposure.Claim.Policy.getCoveragesByCoverageType(Exposure.PrimaryCoverage)
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function valueRange_26 () : java.lang.Object {
      return Exposure.Claim.Policy.CappedStatCodes
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_54 () : java.lang.Object {
      return Exposure.Claim.RelatedContacts
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_LossParty_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 29, column 44
    function valueRoot_3 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TextInput (id=Claimant_PrimaryPhone_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 114, column 53
    function valueRoot_71 () : java.lang.Object {
      return Exposure.Claimant
    }
    
    // 'value' attribute on TextInput (id=PropertyDescription_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 134, column 63
    function valueRoot_80 () : java.lang.Object {
      return Exposure.MobilePropertyIncident
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 140, column 48
    function valueRoot_84 () : java.lang.Object {
      return Exposure.Incident
    }
    
    // 'value' attribute on TextInput (id=EstimateTime_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 170, column 80
    function value_101 () : java.lang.String {
      return Exposure.MobilePropertyIncident.EstRepairTime
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 179, column 41
    function value_106 () : java.lang.Boolean {
      return Exposure.OtherCoverage
    }
    
    // 'value' attribute on RangeInput (id=Exposure_Coverage_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 46, column 37
    function value_12 () : entity.Coverage {
      return Exposure.Coverage
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_LossParty_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 29, column 44
    function value_2 () : typekey.LossPartyType {
      return Exposure.LossParty
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function value_23 () : entity.StatCode {
      return Exposure.StatLine
    }
    
    // 'value' attribute on TextInput (id=StatLine_Warning_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 65, column 65
    function value_35 () : java.lang.String {
      return DisplayKey.get("Java.StatCodes.StatCodeListCappedWarning", Exposure.Claim.Policy.StatCodeListCap, Exposure.Claim.Policy.StatCodes.length)
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 83, column 45
    function value_46 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return Exposure.Claim.Insured
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_PrimaryCoverage_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 34, column 43
    function value_5 () : typekey.CoverageType {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_51 () : entity.Contact {
      return Exposure.Claimant
    }
    
    // 'value' attribute on TypeKeyInput (id=Claimant_Type_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 95, column 42
    function value_61 () : typekey.ClaimantType {
      return Exposure.ClaimantType
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactProhibited_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 110, column 36
    function value_65 () : java.lang.Boolean {
      return ContactProhibited
    }
    
    // 'value' attribute on TextInput (id=Claimant_PrimaryPhone_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 114, column 53
    function value_70 () : java.lang.String {
      return Exposure.Claimant.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextInput (id=Claimant_Address_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 122, column 62
    function value_75 () : java.lang.String {
      return Exposure.Claimant.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on TextInput (id=PropertyDescription_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 134, column 63
    function value_78 () : java.lang.String {
      return Exposure.MobilePropertyIncident.PropertyDesc
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_CoverageSubType_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 39, column 46
    function value_8 () : typekey.CoverageSubtype {
      return Exposure.CoverageSubType
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 140, column 48
    function value_82 () : java.lang.String {
      return Exposure.Incident.Description
    }
    
    // 'value' attribute on CurrencyInput (id=LossEstimate_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 145, column 49
    function value_86 () : gw.api.financials.CurrencyAmount {
      return Exposure.Incident.LossEstimate
    }
    
    // 'value' attribute on TypeKeyInput (id=EstimatedReceived_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 156, column 35
    function value_90 () : typekey.YesNo {
      return Exposure.MobilePropertyIncident.EstimatesReceived
    }
    
    // 'value' attribute on CurrencyInput (id=EstimateCost_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 164, column 80
    function value_95 () : gw.api.financials.CurrencyAmount {
      return Exposure.MobilePropertyIncident.EstRepairCost
    }
    
    // 'valueRange' attribute on RangeInput (id=Exposure_Coverage_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 46, column 37
    function verifyValueRangeIsAllowedType_16 ($$arg :  entity.Coverage[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Exposure_Coverage_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 46, column 37
    function verifyValueRangeIsAllowedType_16 ($$arg :  gw.api.database.IQueryBeanResult<entity.Coverage>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Exposure_Coverage_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 46, column 37
    function verifyValueRangeIsAllowedType_16 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_27 ($$arg :  entity.StatCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_27 ($$arg :  gw.api.database.IQueryBeanResult<entity.StatCode>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_27 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_55 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_55 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_55 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Exposure_Coverage_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 46, column 37
    function verifyValueRange_17 () : void {
      var __valueRangeArg = Exposure.Claim.Policy.getCoveragesByCoverageType(Exposure.PrimaryCoverage)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_16(__valueRangeArg)
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRange_28 () : void {
      var __valueRangeArg = Exposure.Claim.Policy.CappedStatCodes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_27(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_56 () : void {
      var __valueRangeArg = Exposure.Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_55(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=ServiceRequestSubmitMessageFNOL_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 196, column 46
    function visible_112 () : java.lang.Boolean {
      return Exposure.Claim.DraftClaim
    }
    
    // 'visible' attribute on TextInput (id=ServiceRequestSubmitMessage_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 201, column 81
    function visible_114 () : java.lang.Boolean {
      return not Exposure.Claim.DraftClaim and CurrentLocation.InEditMode
    }
    
    // 'visible' attribute on TextInput (id=StatLine_Warning_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 65, column 65
    function visible_34 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodeListCapped
    }
    
    // 'visible' attribute on InputSet at NewClaimThirdPartyPropertyDamageDV.pcf: line 51, column 59
    function visible_38 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodingEnabled
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_39 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_42 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on CurrencyInput (id=EstimateCost_Input) at NewClaimThirdPartyPropertyDamageDV.pcf: line 164, column 80
    function visible_94 () : java.lang.Boolean {
      return Exposure.MobilePropertyIncident.EstimatesReceived == TC_YES
    }
    
    property get Exposure () : Exposure {
      return getRequireValue("Exposure", 0) as Exposure
    }
    
    property set Exposure ($arg :  Exposure) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    property get appraisalIncidentCode () : String {
      return getVariableValue("appraisalIncidentCode", 0) as String
    }
    
    property set appraisalIncidentCode ($arg :  String) {
      setVariableValue("appraisalIncidentCode", 0, $arg)
    }
    
    property get otherServiceRequests () : java.util.Set<ServiceRequest> {
      return getVariableValue("otherServiceRequests", 0) as java.util.Set<ServiceRequest>
    }
    
    property set otherServiceRequests ($arg :  java.util.Set<ServiceRequest>) {
      setVariableValue("otherServiceRequests", 0, $arg)
    }
    
    property get unusedServiceRequests () : java.util.Set<ServiceRequest> {
      return getRequireValue("unusedServiceRequests", 0) as java.util.Set<ServiceRequest>
    }
    
    property set unusedServiceRequests ($arg :  java.util.Set<ServiceRequest>) {
      setRequireValue("unusedServiceRequests", 0, $arg)
    }
    
    
    function findServiceRequest(serviceCode : String) : ServiceRequest {
      return Exposure.MobilePropertyIncident.ServiceRequests.firstWhere(\ sr ->
          sr.Instruction.Services.Count == 1
              and sr.Instruction.Services.single().Service.Code == serviceCode
              and (otherServiceRequests == null or not otherServiceRequests.contains(sr))
      )
    }
    
    property get AppraisalServiceRequest() : ServiceRequest {
      return findServiceRequest(appraisalIncidentCode)
    }
    
    function createOtherServiceRequests() :  Set<ServiceRequest> {
      return Exposure.MobilePropertyIncident.ServiceRequests.where(\sr -> sr != AppraisalServiceRequest).toSet()
    }
    
    property get ContactProhibited() : boolean {
        return Exposure.Claim.getClaimContact(Exposure.Claimant).ContactProhibited
    }
      
    property set ContactProhibited(prohibited : boolean) {
      var claimContact = Exposure.Claim.getClaimContact(Exposure.Claimant) 
      if (claimContact != null) claimContact.ContactProhibited = prohibited 
    }
          
        
    
    
  }
  
  
}