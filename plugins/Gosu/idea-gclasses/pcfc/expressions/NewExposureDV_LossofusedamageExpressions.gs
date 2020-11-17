package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/newexposure/NewExposureDV.Lossofusedamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewExposureDV_LossofusedamageExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/newexposure/NewExposureDV.Lossofusedamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewExposureDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=Exposure_StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_18 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_20 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at NewExposureDV.Lossofusedamage.pcf: line 56, column 63
    function action_28 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_42 () : void {
      AddressBookPickerPopup.push(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_44 () : void {
      if (Exposure.Claimant != null) { ClaimContactDetailPopup.push(Exposure.Claimant, Exposure.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_47 () : void {
      ClaimContactDetailPopup.push(Exposure.Claimant, Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=Exposure_StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_19 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_21 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at NewExposureDV.Lossofusedamage.pcf: line 56, column 63
    function action_dest_29 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_43 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_48 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Exposure.Claimant, Exposure.Claim)
    }
    
    // 'def' attribute on ListViewInput at NewExposureDV.Lossofusedamage.pcf: line 183, column 115
    function def_onEnter_113 (def :  pcf.EditableOtherCoverageDetailsLV) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on InputSetRef at NewExposureDV.Lossofusedamage.pcf: line 203, column 134
    function def_onEnter_119 (def :  pcf.OtherServicesLVInputSet) : void {
      def.onEnter(PropertyIncident.Claim, PropertyIncident, PropertyIncident.ServiceRequests.toSet(), null, {})
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_39 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Exposure.Claimant), null, Exposure.Claim)
    }
    
    // 'def' attribute on InputSetRef at NewExposureDV.Lossofusedamage.pcf: line 127, column 57
    function def_onEnter_77 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(Exposure.AddressOwner)
    }
    
    // 'def' attribute on ListViewInput at NewExposureDV.Lossofusedamage.pcf: line 183, column 115
    function def_refreshVariables_114 (def :  pcf.EditableOtherCoverageDetailsLV) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on InputSetRef at NewExposureDV.Lossofusedamage.pcf: line 203, column 134
    function def_refreshVariables_120 (def :  pcf.OtherServicesLVInputSet) : void {
      def.refreshVariables(PropertyIncident.Claim, PropertyIncident, PropertyIncident.ServiceRequests.toSet(), null, {})
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_40 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Exposure.Claimant), null, Exposure.Claim)
    }
    
    // 'def' attribute on InputSetRef at NewExposureDV.Lossofusedamage.pcf: line 127, column 57
    function def_refreshVariables_78 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(Exposure.AddressOwner)
    }
    
    // 'value' attribute on CurrencyInput (id=Exposure_ALEMealsRate_Input) at NewExposureDV.Lossofusedamage.pcf: line 171, column 57
    function defaultSetter_105 (__VALUE_TO_SET :  java.lang.Object) : void {
      PropertyIncident.MealsRate = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage_Input) at NewExposureDV.Lossofusedamage.pcf: line 179, column 41
    function defaultSetter_110 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.OtherCoverage = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=Exposure_Coverage_Input) at NewExposureDV.Lossofusedamage.pcf: line 44, column 37
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Coverage = (__VALUE_TO_SET as entity.Coverage)
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.StatLine = (__VALUE_TO_SET as entity.StatCode)
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_51 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claimant = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claimant_Type_Input) at NewExposureDV.Lossofusedamage.pcf: line 93, column 42
    function defaultSetter_61 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.ClaimantType = (__VALUE_TO_SET as typekey.ClaimantType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactProhibited_Input) at NewExposureDV.Lossofusedamage.pcf: line 108, column 36
    function defaultSetter_65 (__VALUE_TO_SET :  java.lang.Object) : void {
      ContactProhibited = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextAreaInput (id=Exposure_Description_Input) at NewExposureDV.Lossofusedamage.pcf: line 138, column 47
    function defaultSetter_80 (__VALUE_TO_SET :  java.lang.Object) : void {
      PropertyIncident.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Exposure_LossofUse_Input) at NewExposureDV.Lossofusedamage.pcf: line 143, column 44
    function defaultSetter_84 (__VALUE_TO_SET :  java.lang.Object) : void {
      PropertyIncident.LossofUse = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CurrencyInput (id=Exposure_LossEstimate_Input) at NewExposureDV.Lossofusedamage.pcf: line 150, column 48
    function defaultSetter_88 (__VALUE_TO_SET :  java.lang.Object) : void {
      PropertyIncident.LossEstimate = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TextInput (id=Exposure_ALEMealsDays_Input) at NewExposureDV.Lossofusedamage.pcf: line 158, column 57
    function defaultSetter_93 (__VALUE_TO_SET :  java.lang.Object) : void {
      PropertyIncident.MealsDays = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=Exposure_ALEMealsPeople_Input) at NewExposureDV.Lossofusedamage.pcf: line 165, column 57
    function defaultSetter_99 (__VALUE_TO_SET :  java.lang.Object) : void {
      PropertyIncident.MealsPeople = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'initialValue' attribute on Variable at NewExposureDV.Lossofusedamage.pcf: line 18, column 39
    function initialValue_0 () : entity.PropertyIncident {
      return Exposure.Incident as PropertyIncident
    }
    
    // 'onChange' attribute on PostOnChange at NewExposureDV.Lossofusedamage.pcf: line 46, column 105
    function onChange_10 () : void {
      ext.config.exposure.ExposureUIHelper.checkThatIncidentExistsForCoverage(Exposure)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_49 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Exposure.Claimant); var result = eval("Exposure.Claimant = Exposure.Claim.resolveContact(Exposure.Claimant) as " + contactType.Name + ";return null;"); ;
    }
    
    // ClaimContactInput (id=Claimant_Picker_Input) at NewExposureDV.Lossofusedamage.pcf: line 78, column 43
    function reflectionValue_46 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return (VALUE == TC_INSURED) ? (Exposure.Claim.Insured) : (true) ? ("") : "<NOCHANGE>"
    }
    
    // Reflect at NewExposureDV.Lossofusedamage.pcf: line 95, column 40
    function reflectionValue_59 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return (Exposure.Claim.Insured==VALUE) ? ("insured") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'value' attribute on Reflect at NewExposureDV.Lossofusedamage.pcf: line 115, column 44
    function reflectionValue_67 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // 'value' attribute on Reflect at NewExposureDV.Lossofusedamage.pcf: line 123, column 53
    function reflectionValue_72 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // 'valueRange' attribute on RangeInput (id=Exposure_Coverage_Input) at NewExposureDV.Lossofusedamage.pcf: line 44, column 37
    function valueRange_14 () : java.lang.Object {
      return Exposure.Claim.Policy.getCoveragesByCoverageType(Exposure.PrimaryCoverage)
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function valueRange_25 () : java.lang.Object {
      return Exposure.Claim.Policy.CappedStatCodes
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_53 () : java.lang.Object {
      return Exposure.Claim.getRelatedContacts(Exposure.getContactTypes(TC_CLAIMANT))
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_LossParty_Input) at NewExposureDV.Lossofusedamage.pcf: line 27, column 44
    function valueRoot_2 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TextInput (id=Claimant_PrimaryPhone_Input) at NewExposureDV.Lossofusedamage.pcf: line 112, column 53
    function valueRoot_70 () : java.lang.Object {
      return Exposure.Claimant
    }
    
    // 'value' attribute on TextAreaInput (id=Exposure_Description_Input) at NewExposureDV.Lossofusedamage.pcf: line 138, column 47
    function valueRoot_81 () : java.lang.Object {
      return PropertyIncident
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_LossParty_Input) at NewExposureDV.Lossofusedamage.pcf: line 27, column 44
    function value_1 () : typekey.LossPartyType {
      return Exposure.LossParty
    }
    
    // 'value' attribute on CurrencyInput (id=Exposure_ALEMealsRate_Input) at NewExposureDV.Lossofusedamage.pcf: line 171, column 57
    function value_104 () : gw.api.financials.CurrencyAmount {
      return PropertyIncident.MealsRate
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage_Input) at NewExposureDV.Lossofusedamage.pcf: line 179, column 41
    function value_109 () : java.lang.Boolean {
      return Exposure.OtherCoverage
    }
    
    // 'value' attribute on RangeInput (id=Exposure_Coverage_Input) at NewExposureDV.Lossofusedamage.pcf: line 44, column 37
    function value_11 () : entity.Coverage {
      return Exposure.Coverage
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function value_22 () : entity.StatCode {
      return Exposure.StatLine
    }
    
    // 'value' attribute on TextInput (id=StatLine_Warning_Input) at NewExposureDV.Lossofusedamage.pcf: line 63, column 65
    function value_34 () : java.lang.String {
      return DisplayKey.get("Java.StatCodes.StatCodeListCappedWarning", Exposure.Claim.Policy.StatCodeListCap, Exposure.Claim.Policy.StatCodes.length)
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_PrimaryCoverage_Input) at NewExposureDV.Lossofusedamage.pcf: line 32, column 43
    function value_4 () : typekey.CoverageType {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at NewExposureDV.Lossofusedamage.pcf: line 81, column 45
    function value_45 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return Exposure.Claim.Insured
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_50 () : entity.Contact {
      return Exposure.Claimant
    }
    
    // 'value' attribute on TypeKeyInput (id=Claimant_Type_Input) at NewExposureDV.Lossofusedamage.pcf: line 93, column 42
    function value_60 () : typekey.ClaimantType {
      return Exposure.ClaimantType
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactProhibited_Input) at NewExposureDV.Lossofusedamage.pcf: line 108, column 36
    function value_64 () : java.lang.Boolean {
      return ContactProhibited
    }
    
    // 'value' attribute on TextInput (id=Claimant_PrimaryPhone_Input) at NewExposureDV.Lossofusedamage.pcf: line 112, column 53
    function value_69 () : java.lang.String {
      return Exposure.Claimant.PrimaryPhoneValue
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_CoverageSubType_Input) at NewExposureDV.Lossofusedamage.pcf: line 37, column 46
    function value_7 () : typekey.CoverageSubtype {
      return Exposure.CoverageSubType
    }
    
    // 'value' attribute on TextInput (id=Claimant_Address_Input) at NewExposureDV.Lossofusedamage.pcf: line 120, column 62
    function value_74 () : java.lang.String {
      return Exposure.Claimant.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on TextAreaInput (id=Exposure_Description_Input) at NewExposureDV.Lossofusedamage.pcf: line 138, column 47
    function value_79 () : java.lang.String {
      return PropertyIncident.Description
    }
    
    // 'value' attribute on BooleanRadioInput (id=Exposure_LossofUse_Input) at NewExposureDV.Lossofusedamage.pcf: line 143, column 44
    function value_83 () : java.lang.Boolean {
      return PropertyIncident.LossofUse
    }
    
    // 'value' attribute on CurrencyInput (id=Exposure_LossEstimate_Input) at NewExposureDV.Lossofusedamage.pcf: line 150, column 48
    function value_87 () : gw.api.financials.CurrencyAmount {
      return PropertyIncident.LossEstimate
    }
    
    // 'value' attribute on TextInput (id=Exposure_ALEMealsDays_Input) at NewExposureDV.Lossofusedamage.pcf: line 158, column 57
    function value_92 () : java.lang.Integer {
      return PropertyIncident.MealsDays
    }
    
    // 'value' attribute on TextInput (id=Exposure_ALEMealsPeople_Input) at NewExposureDV.Lossofusedamage.pcf: line 165, column 57
    function value_98 () : java.lang.Integer {
      return PropertyIncident.MealsPeople
    }
    
    // 'valueRange' attribute on RangeInput (id=Exposure_Coverage_Input) at NewExposureDV.Lossofusedamage.pcf: line 44, column 37
    function verifyValueRangeIsAllowedType_15 ($$arg :  entity.Coverage[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Exposure_Coverage_Input) at NewExposureDV.Lossofusedamage.pcf: line 44, column 37
    function verifyValueRangeIsAllowedType_15 ($$arg :  gw.api.database.IQueryBeanResult<entity.Coverage>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Exposure_Coverage_Input) at NewExposureDV.Lossofusedamage.pcf: line 44, column 37
    function verifyValueRangeIsAllowedType_15 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_26 ($$arg :  entity.StatCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_26 ($$arg :  gw.api.database.IQueryBeanResult<entity.StatCode>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_26 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_54 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_54 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_54 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Exposure_Coverage_Input) at NewExposureDV.Lossofusedamage.pcf: line 44, column 37
    function verifyValueRange_16 () : void {
      var __valueRangeArg = Exposure.Claim.Policy.getCoveragesByCoverageType(Exposure.PrimaryCoverage)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_15(__valueRangeArg)
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRange_27 () : void {
      var __valueRangeArg = Exposure.Claim.Policy.CappedStatCodes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_26(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_55 () : void {
      var __valueRangeArg = Exposure.Claim.getRelatedContacts(Exposure.getContactTypes(TC_CLAIMANT))
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_54(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=ServiceRequestSubmitMessageFNOL_Input) at NewExposureDV.Lossofusedamage.pcf: line 196, column 54
    function visible_115 () : java.lang.Boolean {
      return PropertyIncident.Claim.DraftClaim
    }
    
    // 'visible' attribute on TextInput (id=ServiceRequestSubmitMessage_Input) at NewExposureDV.Lossofusedamage.pcf: line 201, column 89
    function visible_117 () : java.lang.Boolean {
      return not PropertyIncident.Claim.DraftClaim and CurrentLocation.InEditMode
    }
    
    // 'visible' attribute on TextInput (id=StatLine_Warning_Input) at NewExposureDV.Lossofusedamage.pcf: line 63, column 65
    function visible_33 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodeListCapped
    }
    
    // 'visible' attribute on InputSet at NewExposureDV.Lossofusedamage.pcf: line 49, column 59
    function visible_37 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodingEnabled
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_38 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_41 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on TextInput (id=Exposure_ALEMealsDays_Input) at NewExposureDV.Lossofusedamage.pcf: line 158, column 57
    function visible_91 () : java.lang.Boolean {
      return  PropertyIncident.LossofUse == true 
    }
    
    property get Exposure () : Exposure {
      return getRequireValue("Exposure", 0) as Exposure
    }
    
    property set Exposure ($arg :  Exposure) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    property get PropertyIncident () : entity.PropertyIncident {
      return getVariableValue("PropertyIncident", 0) as entity.PropertyIncident
    }
    
    property set PropertyIncident ($arg :  entity.PropertyIncident) {
      setVariableValue("PropertyIncident", 0, $arg)
    }
    
    property get unusedServiceRequests () : java.util.Set<ServiceRequest> {
      return getRequireValue("unusedServiceRequests", 0) as java.util.Set<ServiceRequest>
    }
    
    property set unusedServiceRequests ($arg :  java.util.Set<ServiceRequest>) {
      setRequireValue("unusedServiceRequests", 0, $arg)
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