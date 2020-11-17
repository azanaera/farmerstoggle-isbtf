package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/newexposure/NewPIPSummaryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewPIPSummaryDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/newexposure/NewPIPSummaryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewPIPSummaryDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
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
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at NewPIPSummaryDV.pcf: line 48, column 63
    function action_27 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_41 () : void {
      AddressBookPickerPopup.push(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_43 () : void {
      if (Exposure.Claimant != null) { ClaimContactDetailPopup.push(Exposure.Claimant, Exposure.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_46 () : void {
      ClaimContactDetailPopup.push(Exposure.Claimant, Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_89 () : void {
      AddressBookPickerPopup.push(statictypeof (Exposure.disbenprovider), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_91 () : void {
      if (Exposure.disbenprovider != null) { ClaimContactDetailPopup.push(Exposure.disbenprovider, Exposure.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_92 () : void {
      ClaimContactDetailPopup.push(Exposure.disbenprovider, Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_18 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_20 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at NewPIPSummaryDV.pcf: line 48, column 63
    function action_dest_28 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_42 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_47 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Exposure.Claimant, Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_90 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Exposure.disbenprovider), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_93 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Exposure.disbenprovider, Exposure.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_38 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Exposure.Claimant), null, Exposure.Claim)
    }
    
    // 'def' attribute on InputSetRef at NewPIPSummaryDV.pcf: line 120, column 43
    function def_onEnter_77 (def :  pcf.BIDamageInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on ListViewInput at NewPIPSummaryDV.pcf: line 124, column 96
    function def_onEnter_79 (def :  pcf.IMEPerformedLV) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_86 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Exposure.disbenprovider), null, Exposure.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_39 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Exposure.Claimant), null, Exposure.Claim)
    }
    
    // 'def' attribute on InputSetRef at NewPIPSummaryDV.pcf: line 120, column 43
    function def_refreshVariables_78 (def :  pcf.BIDamageInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on ListViewInput at NewPIPSummaryDV.pcf: line 124, column 96
    function def_refreshVariables_80 (def :  pcf.IMEPerformedLV) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_87 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Exposure.disbenprovider), null, Exposure.Claim)
    }
    
    // 'value' attribute on RangeInput (id=Title_Coverage_Input) at NewPIPSummaryDV.pcf: line 36, column 37
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Coverage = (__VALUE_TO_SET as entity.Coverage)
    }
    
    // 'value' attribute on CurrencyInput (id=LostWagesBenefits_WeeklyCompRate_Input) at NewPIPSummaryDV.pcf: line 176, column 54
    function defaultSetter_121 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.DisBenefits.WeeklyCompRate = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TextInput (id=LostWagesBenefits_Description_Input) at NewPIPSummaryDV.pcf: line 181, column 51
    function defaultSetter_125 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.DisBenefits.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=RepresentationLevel_Ext_Input) at NewPIPSummaryDV.pcf: line 189, column 54
    function defaultSetter_129 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.RepresentationLevel_Ext = (__VALUE_TO_SET as typekey.RepresentationLevel_Ext)
    }
    
    // 'value' attribute on TypeKeyInput (id=EscalationLevel_Ext_Input) at NewPIPSummaryDV.pcf: line 195, column 50
    function defaultSetter_133 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.EscalationLevel_Ext = (__VALUE_TO_SET as typekey.EscalationLevel_Ext)
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.StatLine = (__VALUE_TO_SET as entity.StatCode)
    }
    
    // 'value' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_50 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claimant = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_ClaimantType_Input) at NewPIPSummaryDV.pcf: line 85, column 42
    function defaultSetter_60 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.ClaimantType = (__VALUE_TO_SET as typekey.ClaimantType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactPermitted_Input) at NewPIPSummaryDV.pcf: line 100, column 44
    function defaultSetter_64 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.ContactPermitted = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=PIPDamages_SSDIEligible_Input) at NewPIPSummaryDV.pcf: line 139, column 40
    function defaultSetter_82 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.SSDIEligible = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_96 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.disbenprovider = (__VALUE_TO_SET as entity.Company)
    }
    
    // 'onChange' attribute on PostOnChange at NewPIPSummaryDV.pcf: line 38, column 105
    function onChange_9 () : void {
      ext.config.exposure.ExposureUIHelper.checkThatIncidentExistsForCoverage(Exposure)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_48 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Exposure.Claimant); var result = eval("Exposure.Claimant = Exposure.Claim.resolveContact(Exposure.Claimant) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_94 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Exposure.disbenprovider); var result = eval("Exposure.disbenprovider = Exposure.Claim.resolveContact(Exposure.disbenprovider) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'value' attribute on Reflect at NewPIPSummaryDV.pcf: line 154, column 53
    function reflectionValue_105 (TRIGGER_INDEX :  int, VALUE :  entity.Company) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on Reflect at NewPIPSummaryDV.pcf: line 162, column 53
    function reflectionValue_110 (TRIGGER_INDEX :  int, VALUE :  entity.Company) : java.lang.Object {
      return VALUE.PrimaryContact.DisplayName
    }
    
    // 'value' attribute on Reflect at NewPIPSummaryDV.pcf: line 170, column 44
    function reflectionValue_115 (TRIGGER_INDEX :  int, VALUE :  entity.Company) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // ClaimContactInput (id=PIPDamages_Claimant_Input) at NewPIPSummaryDV.pcf: line 70, column 34
    function reflectionValue_45 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return (VALUE == TC_INSURED) ? (Exposure.Claim.Insured) : (true) ? ("") : "<NOCHANGE>"
    }
    
    // Reflect at NewPIPSummaryDV.pcf: line 87, column 44
    function reflectionValue_58 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return (Exposure.Claim.Insured==VALUE) ? ("insured") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'value' attribute on Reflect at NewPIPSummaryDV.pcf: line 107, column 44
    function reflectionValue_67 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // 'value' attribute on Reflect at NewPIPSummaryDV.pcf: line 116, column 53
    function reflectionValue_72 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // 'valueRange' attribute on RangeInput (id=Title_Coverage_Input) at NewPIPSummaryDV.pcf: line 36, column 37
    function valueRange_13 () : java.lang.Object {
      return Exposure.Claim.Policy.getCoveragesByCoverageType(Exposure.PrimaryCoverage)
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function valueRange_24 () : java.lang.Object {
      return Exposure.Claim.Policy.CappedStatCodes
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_52 () : java.lang.Object {
      return Exposure.Claim.getRelatedContacts(Exposure.getContactTypes(TC_CLAIMANT))
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_98 () : java.lang.Object {
      return Exposure.Claim.RelatedCompanyArray
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at NewPIPSummaryDV.pcf: line 18, column 44
    function valueRoot_1 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TextInput (id=Provider_PrimaryAddress_Input) at NewPIPSummaryDV.pcf: line 151, column 68
    function valueRoot_108 () : java.lang.Object {
      return Exposure.disbenprovider
    }
    
    // 'value' attribute on TextInput (id=Provider_PrimaryContact_Input) at NewPIPSummaryDV.pcf: line 159, column 68
    function valueRoot_113 () : java.lang.Object {
      return Exposure.disbenprovider.PrimaryContact
    }
    
    // 'value' attribute on CurrencyInput (id=LostWagesBenefits_WeeklyCompRate_Input) at NewPIPSummaryDV.pcf: line 176, column 54
    function valueRoot_122 () : java.lang.Object {
      return Exposure.DisBenefits
    }
    
    // 'value' attribute on TextInput (id=Claimant_PrimaryPhone_Input) at NewPIPSummaryDV.pcf: line 104, column 53
    function valueRoot_70 () : java.lang.Object {
      return Exposure.Claimant
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at NewPIPSummaryDV.pcf: line 18, column 44
    function value_0 () : typekey.LossPartyType {
      return Exposure.LossParty
    }
    
    // 'value' attribute on RangeInput (id=Title_Coverage_Input) at NewPIPSummaryDV.pcf: line 36, column 37
    function value_10 () : entity.Coverage {
      return Exposure.Coverage
    }
    
    // 'value' attribute on TextInput (id=Provider_PrimaryAddress_Input) at NewPIPSummaryDV.pcf: line 151, column 68
    function value_107 () : java.lang.String {
      return Exposure.disbenprovider.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on TextInput (id=Provider_PrimaryContact_Input) at NewPIPSummaryDV.pcf: line 159, column 68
    function value_112 () : java.lang.String {
      return Exposure.disbenprovider.PrimaryContact.DisplayName
    }
    
    // 'value' attribute on TextInput (id=Provider_PrimaryPhone_Input) at NewPIPSummaryDV.pcf: line 167, column 59
    function value_117 () : java.lang.String {
      return Exposure.disbenprovider.PrimaryPhoneValue
    }
    
    // 'value' attribute on CurrencyInput (id=LostWagesBenefits_WeeklyCompRate_Input) at NewPIPSummaryDV.pcf: line 176, column 54
    function value_120 () : gw.api.financials.CurrencyAmount {
      return Exposure.DisBenefits.WeeklyCompRate
    }
    
    // 'value' attribute on TextInput (id=LostWagesBenefits_Description_Input) at NewPIPSummaryDV.pcf: line 181, column 51
    function value_124 () : java.lang.String {
      return Exposure.DisBenefits.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=RepresentationLevel_Ext_Input) at NewPIPSummaryDV.pcf: line 189, column 54
    function value_128 () : typekey.RepresentationLevel_Ext {
      return Exposure.RepresentationLevel_Ext
    }
    
    // 'value' attribute on TypeKeyInput (id=EscalationLevel_Ext_Input) at NewPIPSummaryDV.pcf: line 195, column 50
    function value_132 () : typekey.EscalationLevel_Ext {
      return Exposure.EscalationLevel_Ext
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function value_21 () : entity.StatCode {
      return Exposure.StatLine
    }
    
    // 'value' attribute on TypeKeyInput (id=Title_CoverageSubType_Input) at NewPIPSummaryDV.pcf: line 23, column 46
    function value_3 () : typekey.CoverageSubtype {
      return Exposure.CoverageSubType
    }
    
    // 'value' attribute on TextInput (id=StatLine_Warning_Input) at NewPIPSummaryDV.pcf: line 55, column 65
    function value_33 () : java.lang.String {
      return DisplayKey.get("Java.StatCodes.StatCodeListCappedWarning", Exposure.Claim.Policy.StatCodeListCap, Exposure.Claim.Policy.StatCodes.length)
    }
    
    // 'value' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at NewPIPSummaryDV.pcf: line 73, column 45
    function value_44 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return Exposure.Claim.Insured
    }
    
    // 'value' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_49 () : entity.Contact {
      return Exposure.Claimant
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_ClaimantType_Input) at NewPIPSummaryDV.pcf: line 85, column 42
    function value_59 () : typekey.ClaimantType {
      return Exposure.ClaimantType
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryCoverage_Input) at NewPIPSummaryDV.pcf: line 28, column 43
    function value_6 () : typekey.CoverageType {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactPermitted_Input) at NewPIPSummaryDV.pcf: line 100, column 44
    function value_63 () : java.lang.Boolean {
      return Exposure.ContactPermitted
    }
    
    // 'value' attribute on TextInput (id=Claimant_PrimaryPhone_Input) at NewPIPSummaryDV.pcf: line 104, column 53
    function value_69 () : java.lang.String {
      return Exposure.Claimant.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextAreaInput (id=Claimant_PrimaryAddress_Input) at NewPIPSummaryDV.pcf: line 113, column 62
    function value_74 () : java.lang.String {
      return Exposure.Claimant.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on BooleanRadioInput (id=PIPDamages_SSDIEligible_Input) at NewPIPSummaryDV.pcf: line 139, column 40
    function value_81 () : java.lang.Boolean {
      return Exposure.SSDIEligible
    }
    
    // 'value' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_95 () : entity.Company {
      return Exposure.disbenprovider
    }
    
    // 'valueRange' attribute on RangeInput (id=Title_Coverage_Input) at NewPIPSummaryDV.pcf: line 36, column 37
    function verifyValueRangeIsAllowedType_14 ($$arg :  entity.Coverage[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Title_Coverage_Input) at NewPIPSummaryDV.pcf: line 36, column 37
    function verifyValueRangeIsAllowedType_14 ($$arg :  gw.api.database.IQueryBeanResult<entity.Coverage>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Title_Coverage_Input) at NewPIPSummaryDV.pcf: line 36, column 37
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
    
    // 'valueRange' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_53 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_53 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_53 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_99 ($$arg :  entity.Company[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_99 ($$arg :  gw.api.database.IQueryBeanResult<entity.Company>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_99 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_100 () : void {
      var __valueRangeArg = Exposure.Claim.RelatedCompanyArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_99(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Title_Coverage_Input) at NewPIPSummaryDV.pcf: line 36, column 37
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
    
    // 'valueRange' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_54 () : void {
      var __valueRangeArg = Exposure.Claim.getRelatedContacts(Exposure.getContactTypes(TC_CLAIMANT))
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_53(__valueRangeArg)
    }
    
    // 'valueType' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at NewPIPSummaryDV.pcf: line 147, column 37
    function verifyValueType_104 () : void {
      var __valueTypeArg : entity.Company
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'visible' attribute on TextInput (id=StatLine_Warning_Input) at NewPIPSummaryDV.pcf: line 55, column 65
    function visible_32 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodeListCapped
    }
    
    // 'visible' attribute on InputSet at NewPIPSummaryDV.pcf: line 41, column 59
    function visible_36 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodingEnabled
    }
    
    // 'visible' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_37 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_40 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_88 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Exposure.disbenprovider), Exposure.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get Exposure () : Exposure {
      return getRequireValue("Exposure", 0) as Exposure
    }
    
    property set Exposure ($arg :  Exposure) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    
  }
  
  
}