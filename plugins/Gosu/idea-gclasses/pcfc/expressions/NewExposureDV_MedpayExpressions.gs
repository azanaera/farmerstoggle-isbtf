package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/newexposure/NewExposureDV.Medpay.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewExposureDV_MedpayExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/newexposure/NewExposureDV.Medpay.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewExposureDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
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
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at NewExposureDV.Medpay.pcf: line 52, column 63
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
    
    // 'action' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_80 () : void {
      AddressBookPickerPopup.push(statictypeof (Exposure.altcontact), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_82 () : void {
      if (Exposure.altcontact != null) { ClaimContactDetailPopup.push(Exposure.altcontact, Exposure.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_83 () : void {
      ClaimContactDetailPopup.push(Exposure.altcontact, Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_18 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_20 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at NewExposureDV.Medpay.pcf: line 52, column 63
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
    
    // 'action' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_81 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Exposure.altcontact), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_84 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Exposure.altcontact, Exposure.Claim)
    }
    
    // 'def' attribute on ListViewInput at NewExposureDV.Medpay.pcf: line 170, column 106
    function def_onEnter_115 (def :  pcf.EditableOtherCoverageDetailsLV) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_38 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Exposure.Claimant), null, Exposure.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_77 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Exposure.altcontact), null, Exposure.Claim)
    }
    
    // 'def' attribute on InputSetRef at NewExposureDV.Medpay.pcf: line 133, column 43
    function def_onEnter_96 (def :  pcf.BIDamageInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on ListViewInput at NewExposureDV.Medpay.pcf: line 170, column 106
    function def_refreshVariables_116 (def :  pcf.EditableOtherCoverageDetailsLV) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_39 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Exposure.Claimant), null, Exposure.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_78 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Exposure.altcontact), null, Exposure.Claim)
    }
    
    // 'def' attribute on InputSetRef at NewExposureDV.Medpay.pcf: line 133, column 43
    function def_refreshVariables_97 (def :  pcf.BIDamageInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'value' attribute on TypeKeyInput (id=RepresentationLevel_Ext_Input) at NewExposureDV.Medpay.pcf: line 152, column 54
    function defaultSetter_104 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.RepresentationLevel_Ext = (__VALUE_TO_SET as typekey.RepresentationLevel_Ext)
    }
    
    // 'value' attribute on TypeKeyInput (id=EscalationLevel_Ext_Input) at NewExposureDV.Medpay.pcf: line 158, column 50
    function defaultSetter_108 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.EscalationLevel_Ext = (__VALUE_TO_SET as typekey.EscalationLevel_Ext)
    }
    
    // 'value' attribute on RangeInput (id=Coverage_Input) at NewExposureDV.Medpay.pcf: line 40, column 37
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Coverage = (__VALUE_TO_SET as entity.Coverage)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage_Input) at NewExposureDV.Medpay.pcf: line 166, column 41
    function defaultSetter_112 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.OtherCoverage = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.StatLine = (__VALUE_TO_SET as entity.StatCode)
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_50 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claimant = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claimant_Type_Input) at NewExposureDV.Medpay.pcf: line 89, column 42
    function defaultSetter_60 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.ClaimantType = (__VALUE_TO_SET as typekey.ClaimantType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactProhibited_Input) at NewExposureDV.Medpay.pcf: line 104, column 36
    function defaultSetter_64 (__VALUE_TO_SET :  java.lang.Object) : void {
      ContactProhibited = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_87 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.altcontact = (__VALUE_TO_SET as entity.Person)
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionState_Input) at NewExposureDV.Medpay.pcf: line 145, column 43
    function defaultSetter_99 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.JurisdictionState = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'filter' attribute on TypeKeyInput (id=JurisdictionState_Input) at NewExposureDV.Medpay.pcf: line 145, column 43
    function filter_101 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return VALUE.hasCategory(JurisdictionType.TC_INSURANCE)
    }
    
    // 'onChange' attribute on PostOnChange at NewExposureDV.Medpay.pcf: line 42, column 105
    function onChange_9 () : void {
      ext.config.exposure.ExposureUIHelper.checkThatIncidentExistsForCoverage(Exposure)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_48 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Exposure.Claimant); var result = eval("Exposure.Claimant = Exposure.Claim.resolveContact(Exposure.Claimant) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_85 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Exposure.altcontact); var result = eval("Exposure.altcontact = Exposure.Claim.resolveContact(Exposure.altcontact) as " + contactType.Name + ";return null;"); ;
    }
    
    // ClaimContactInput (id=Claimant_Picker_Input) at NewExposureDV.Medpay.pcf: line 74, column 34
    function reflectionValue_45 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return (VALUE == TC_INSURED) ? (Exposure.Claim.Insured) : (true) ? ("") : "<NOCHANGE>"
    }
    
    // Reflect at NewExposureDV.Medpay.pcf: line 91, column 40
    function reflectionValue_58 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return (Exposure.Claim.Insured==VALUE) ? ("insured") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'value' attribute on Reflect at NewExposureDV.Medpay.pcf: line 111, column 44
    function reflectionValue_66 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // 'value' attribute on Reflect at NewExposureDV.Medpay.pcf: line 119, column 53
    function reflectionValue_71 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at NewExposureDV.Medpay.pcf: line 40, column 37
    function valueRange_13 () : java.lang.Object {
      return Exposure.Claim.Policy.getCoveragesByCoverageType(Exposure.PrimaryCoverage)
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function valueRange_24 () : java.lang.Object {
      return Exposure.Claim.Policy.CappedStatCodes
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_52 () : java.lang.Object {
      return Exposure.Claim.getRelatedContacts(Exposure.getContactTypes(TC_CLAIMANT))
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_89 () : java.lang.Object {
      return Exposure.Claim.RelatedPersonArray
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at NewExposureDV.Medpay.pcf: line 22, column 44
    function valueRoot_1 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TextInput (id=Claimant_PrimaryPhone_Input) at NewExposureDV.Medpay.pcf: line 108, column 53
    function valueRoot_69 () : java.lang.Object {
      return Exposure.Claimant
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at NewExposureDV.Medpay.pcf: line 22, column 44
    function value_0 () : typekey.LossPartyType {
      return Exposure.LossParty
    }
    
    // 'value' attribute on RangeInput (id=Coverage_Input) at NewExposureDV.Medpay.pcf: line 40, column 37
    function value_10 () : entity.Coverage {
      return Exposure.Coverage
    }
    
    // 'value' attribute on TypeKeyInput (id=RepresentationLevel_Ext_Input) at NewExposureDV.Medpay.pcf: line 152, column 54
    function value_103 () : typekey.RepresentationLevel_Ext {
      return Exposure.RepresentationLevel_Ext
    }
    
    // 'value' attribute on TypeKeyInput (id=EscalationLevel_Ext_Input) at NewExposureDV.Medpay.pcf: line 158, column 50
    function value_107 () : typekey.EscalationLevel_Ext {
      return Exposure.EscalationLevel_Ext
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage_Input) at NewExposureDV.Medpay.pcf: line 166, column 41
    function value_111 () : java.lang.Boolean {
      return Exposure.OtherCoverage
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function value_21 () : entity.StatCode {
      return Exposure.StatLine
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryCoverage_Input) at NewExposureDV.Medpay.pcf: line 27, column 43
    function value_3 () : typekey.CoverageType {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TextInput (id=StatLine_Warning_Input) at NewExposureDV.Medpay.pcf: line 59, column 65
    function value_33 () : java.lang.String {
      return DisplayKey.get("Java.StatCodes.StatCodeListCappedWarning", Exposure.Claim.Policy.StatCodeListCap, Exposure.Claim.Policy.StatCodes.length)
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at NewExposureDV.Medpay.pcf: line 77, column 45
    function value_44 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return Exposure.Claim.Insured
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_49 () : entity.Contact {
      return Exposure.Claimant
    }
    
    // 'value' attribute on TypeKeyInput (id=Claimant_Type_Input) at NewExposureDV.Medpay.pcf: line 89, column 42
    function value_59 () : typekey.ClaimantType {
      return Exposure.ClaimantType
    }
    
    // 'value' attribute on TypeKeyInput (id=CoverageSubType_Input) at NewExposureDV.Medpay.pcf: line 32, column 46
    function value_6 () : typekey.CoverageSubtype {
      return Exposure.CoverageSubType
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactProhibited_Input) at NewExposureDV.Medpay.pcf: line 104, column 36
    function value_63 () : java.lang.Boolean {
      return ContactProhibited
    }
    
    // 'value' attribute on TextInput (id=Claimant_PrimaryPhone_Input) at NewExposureDV.Medpay.pcf: line 108, column 53
    function value_68 () : java.lang.String {
      return Exposure.Claimant.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextInput (id=Claimant_Address_Input) at NewExposureDV.Medpay.pcf: line 116, column 62
    function value_73 () : java.lang.String {
      return Exposure.Claimant.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_86 () : entity.Person {
      return Exposure.altcontact
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionState_Input) at NewExposureDV.Medpay.pcf: line 145, column 43
    function value_98 () : typekey.Jurisdiction {
      return Exposure.JurisdictionState
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at NewExposureDV.Medpay.pcf: line 40, column 37
    function verifyValueRangeIsAllowedType_14 ($$arg :  entity.Coverage[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at NewExposureDV.Medpay.pcf: line 40, column 37
    function verifyValueRangeIsAllowedType_14 ($$arg :  gw.api.database.IQueryBeanResult<entity.Coverage>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at NewExposureDV.Medpay.pcf: line 40, column 37
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
    
    // 'valueRange' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_90 ($$arg :  entity.Person[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_90 ($$arg :  gw.api.database.IQueryBeanResult<entity.Person>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_90 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at NewExposureDV.Medpay.pcf: line 40, column 37
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
      var __valueRangeArg = Exposure.Claim.getRelatedContacts(Exposure.getContactTypes(TC_CLAIMANT))
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_53(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_91 () : void {
      var __valueRangeArg = Exposure.Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_90(__valueRangeArg)
    }
    
    // 'valueType' attribute on ClaimContactInput (id=AltContact_Name_Input) at NewExposureDV.Medpay.pcf: line 130, column 36
    function verifyValueType_95 () : void {
      var __valueTypeArg : entity.Person
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'visible' attribute on TextInput (id=StatLine_Warning_Input) at NewExposureDV.Medpay.pcf: line 59, column 65
    function visible_32 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodeListCapped
    }
    
    // 'visible' attribute on InputSet at NewExposureDV.Medpay.pcf: line 45, column 59
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
    
    // 'visible' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_79 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Exposure.altcontact), Exposure.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get Exposure () : Exposure {
      return getRequireValue("Exposure", 0) as Exposure
    }
    
    property set Exposure ($arg :  Exposure) {
      setRequireValue("Exposure", 0, $arg)
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