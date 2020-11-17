package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/policy/PolicyGeneralPanelSet.Auto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyGeneralPanelSet_AutoExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/policy/PolicyGeneralPanelSet.Auto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyCoverageListDetailExpressionsImpl extends PolicyGeneralPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PolicyGeneralPanelSet.Auto.pcf: line 249, column 37
    function def_onEnter_250 (def :  pcf.EditableAutoPolicyCoveragesLV) : void {
      def.onEnter(Policy)
    }
    
    // 'def' attribute on PanelRef at PolicyGeneralPanelSet.Auto.pcf: line 263, column 26
    function def_onEnter_252 (def :  pcf.ClaimPolicyCovTermsCV) : void {
      def.onEnter(Coverage)
    }
    
    // 'def' attribute on PanelRef at PolicyGeneralPanelSet.Auto.pcf: line 249, column 37
    function def_refreshVariables_251 (def :  pcf.EditableAutoPolicyCoveragesLV) : void {
      def.refreshVariables(Policy)
    }
    
    // 'def' attribute on PanelRef at PolicyGeneralPanelSet.Auto.pcf: line 263, column 26
    function def_refreshVariables_253 (def :  pcf.ClaimPolicyCovTermsCV) : void {
      def.refreshVariables(Coverage)
    }
    
    // 'addVisible' attribute on IteratorButtons at PolicyGeneralPanelSet.Auto.pcf: line 258, column 47
    function visible_246 () : java.lang.Boolean {
      return !Policy.Verified
    }
    
    property get Coverage () : Coverage {
      return getCurrentSelection(1) as Coverage
    }
    
    property set Coverage ($arg :  Coverage) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/claim/policy/PolicyGeneralPanelSet.Auto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyGeneralPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_101 () : void {
      AddressBookPickerPopup.push(statictypeof (Policy.policyholder), Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_103 () : void {
      if (Policy.policyholder != null) { ClaimContactDetailPopup.push(Policy.policyholder, Policy.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_106 () : void {
      ClaimContactDetailPopup.push(Policy.policyholder, Policy.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_126 () : void {
      AddressBookPickerPopup.push(statictypeof (Policy.doingbusinessas), Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_128 () : void {
      if (Policy.doingbusinessas != null) { ClaimContactDetailPopup.push(Policy.doingbusinessas, Policy.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_131 () : void {
      ClaimContactDetailPopup.push(Policy.doingbusinessas, Policy.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_160 () : void {
      AddressBookPickerPopup.push(statictypeof (Policy.agent), Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_162 () : void {
      if (Policy.agent != null) { ClaimContactDetailPopup.push(Policy.agent, Policy.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_164 () : void {
      ClaimContactDetailPopup.push(Policy.agent, Policy.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_188 () : void {
      AddressBookPickerPopup.push(statictypeof (Policy.underwriter), Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_190 () : void {
      if (Policy.underwriter != null) { ClaimContactDetailPopup.push(Policy.underwriter, Policy.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_192 () : void {
      ClaimContactDetailPopup.push(Policy.underwriter, Policy.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_58 () : void {
      AddressBookPickerPopup.push(statictypeof (Policy.insured), Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_60 () : void {
      if (Policy.insured != null) { ClaimContactDetailPopup.push(Policy.insured, Policy.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_62 () : void {
      ClaimContactDetailPopup.push(Policy.insured, Policy.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_102 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Policy.policyholder), Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_107 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Policy.policyholder, Policy.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_127 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Policy.doingbusinessas), Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_132 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Policy.doingbusinessas, Policy.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_161 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Policy.agent), Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_165 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Policy.agent, Policy.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_189 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Policy.underwriter), Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_193 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Policy.underwriter, Policy.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_59 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Policy.insured), Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_63 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Policy.insured, Policy.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_123 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Policy.doingbusinessas), null, Policy.Claim)
    }
    
    // 'def' attribute on ListViewInput at PolicyGeneralPanelSet.Auto.pcf: line 156, column 72
    function def_onEnter_150 (def :  pcf.EditableAdditionalInsuredLV) : void {
      def.onEnter(Policy.getClaimContactRolesByRole(TC_COVEREDPARTY), Policy.Claim, Policy, TC_COVEREDPARTY)
    }
    
    // 'def' attribute on ListViewInput at PolicyGeneralPanelSet.Auto.pcf: line 168, column 73
    function def_onEnter_154 (def :  pcf.EditableExcludedPartiesLV) : void {
      def.onEnter(Policy.getClaimContactRolesByRole(TC_EXCLUDEDPARTY), Policy, TC_EXCLUDEDPARTY)
    }
    
    // 'def' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_157 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Policy.agent), null, Policy.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_185 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Policy.underwriter), null, Policy.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_55 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Policy.insured), null, Policy.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_98 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Policy.policyholder), null, Policy.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_124 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Policy.doingbusinessas), null, Policy.Claim)
    }
    
    // 'def' attribute on ListViewInput at PolicyGeneralPanelSet.Auto.pcf: line 156, column 72
    function def_refreshVariables_151 (def :  pcf.EditableAdditionalInsuredLV) : void {
      def.refreshVariables(Policy.getClaimContactRolesByRole(TC_COVEREDPARTY), Policy.Claim, Policy, TC_COVEREDPARTY)
    }
    
    // 'def' attribute on ListViewInput at PolicyGeneralPanelSet.Auto.pcf: line 168, column 73
    function def_refreshVariables_155 (def :  pcf.EditableExcludedPartiesLV) : void {
      def.refreshVariables(Policy.getClaimContactRolesByRole(TC_EXCLUDEDPARTY), Policy, TC_EXCLUDEDPARTY)
    }
    
    // 'def' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_158 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Policy.agent), null, Policy.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_186 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Policy.underwriter), null, Policy.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_56 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Policy.insured), null, Policy.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_99 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Policy.policyholder), null, Policy.Claim)
    }
    
    // 'value' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_110 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.policyholder = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_135 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.doingbusinessas = (__VALUE_TO_SET as entity.Company)
    }
    
    // 'value' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_168 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.agent = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at PolicyGeneralPanelSet.Auto.pcf: line 56, column 41
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.EffectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=ProducerCode_Input) at PolicyGeneralPanelSet.Auto.pcf: line 188, column 40
    function defaultSetter_180 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.ProducerCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_196 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.underwriter = (__VALUE_TO_SET as entity.Person)
    }
    
    // 'value' attribute on TypeKeyInput (id=Underwriting_Company_Input) at PolicyGeneralPanelSet.Auto.pcf: line 207, column 56
    function defaultSetter_209 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.UnderwritingCo = (__VALUE_TO_SET as typekey.UnderwritingCompanyType)
    }
    
    // 'value' attribute on TypeKeyInput (id=Underwriting_Group_Input) at PolicyGeneralPanelSet.Auto.pcf: line 213, column 54
    function defaultSetter_215 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.UnderwritingGroup = (__VALUE_TO_SET as typekey.UnderwritingGroupType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Other_ForeignCoverage_Input) at PolicyGeneralPanelSet.Auto.pcf: line 225, column 43
    function defaultSetter_224 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.ForeignCoverage = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Other_OtherFinancialInterests_Input) at PolicyGeneralPanelSet.Auto.pcf: line 230, column 46
    function defaultSetter_230 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.FinancialInterests = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Other_AssignedRisk_Input) at PolicyGeneralPanelSet.Auto.pcf: line 235, column 40
    function defaultSetter_236 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.AssignedRisk = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateInput (id=ExpirationDate_Input) at PolicyGeneralPanelSet.Auto.pcf: line 62, column 42
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.ExpirationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=Other_Notes_Input) at PolicyGeneralPanelSet.Auto.pcf: line 240, column 33
    function defaultSetter_242 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.Notes = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=CancellationDate_Input) at PolicyGeneralPanelSet.Auto.pcf: line 69, column 44
    function defaultSetter_30 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.CancellationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=OrigEffectiveDate_Input) at PolicyGeneralPanelSet.Auto.pcf: line 76, column 45
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.OrigEffectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at PolicyGeneralPanelSet.Auto.pcf: line 82, column 45
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.Status = (__VALUE_TO_SET as typekey.PolicyStatus)
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at PolicyGeneralPanelSet.Auto.pcf: line 89, column 68
    function defaultSetter_49 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.Currency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_66 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.insured = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at PolicyGeneralPanelSet.Auto.pcf: line 122, column 40
    function defaultSetter_86 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.AccountNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=CustomerServiceTierRange_Input) at PolicyGeneralPanelSet.Auto.pcf: line 131, column 52
    function defaultSetter_91 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.CustomerServiceTier = (__VALUE_TO_SET as typekey.CustomerServiceTier)
    }
    
    // 'editable' attribute on DateInput (id=EffectiveDate_Input) at PolicyGeneralPanelSet.Auto.pcf: line 56, column 41
    function editable_16 () : java.lang.Boolean {
      return !Policy.Verified
    }
    
    // 'editable' attribute on TypeKeyInput (id=Currency_Input) at PolicyGeneralPanelSet.Auto.pcf: line 89, column 68
    function editable_46 () : java.lang.Boolean {
      return !Policy.Verified and Policy.CurrencyEditable
    }
    
    // 'initialValue' attribute on Variable at PolicyGeneralPanelSet.Auto.pcf: line 18, column 65
    function initialValue_0 () : java.util.List<typekey.CustomerServiceTier> {
      return CustomerServiceTier.findAvailableCustomerTiers()
    }
    
    // 'onPick' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_108 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Policy.policyholder); var result = eval("Policy.policyholder = Policy.Claim.resolveContact(Policy.policyholder) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_133 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Policy.doingbusinessas); var result = eval("Policy.doingbusinessas = Policy.Claim.resolveContact(Policy.doingbusinessas) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_166 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Policy.agent); var result = eval("Policy.agent = Policy.Claim.resolveContact(Policy.agent) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_194 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Policy.underwriter); var result = eval("Policy.underwriter = Policy.Claim.resolveContact(Policy.underwriter) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_64 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Policy.insured); var result = eval("Policy.insured = Policy.Claim.resolveContact(Policy.insured) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'value' attribute on Reflect at PolicyGeneralPanelSet.Auto.pcf: line 110, column 55
    function reflectionValue_76 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // 'validationExpression' attribute on ListViewInput at PolicyGeneralPanelSet.Auto.pcf: line 156, column 72
    function validationExpression_149 () : java.lang.Object {
      return Policy.checkCoveredPartyConstraints()
    }
    
    // 'validationExpression' attribute on ListViewInput at PolicyGeneralPanelSet.Auto.pcf: line 168, column 73
    function validationExpression_153 () : java.lang.Object {
      return Policy.checkExcludedPartyConstraints()
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_137 () : java.lang.Object {
      return Policy.Claim.RelatedCompanyArray
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_198 () : java.lang.Object {
      return Policy.Claim.RelatedPersonArray
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_68 () : java.lang.Object {
      return Policy.Claim.RelatedContacts
    }
    
    // 'valueRange' attribute on RangeInput (id=CustomerServiceTierRange_Input) at PolicyGeneralPanelSet.Auto.pcf: line 131, column 52
    function valueRange_93 () : java.lang.Object {
      return availableCustomerServiceTiers
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at PolicyGeneralPanelSet.Auto.pcf: line 28, column 40
    function valueRoot_2 () : java.lang.Object {
      return Policy
    }
    
    // 'value' attribute on TextAreaInput (id=Insured_Address_Input) at PolicyGeneralPanelSet.Auto.pcf: line 107, column 61
    function valueRoot_79 () : java.lang.Object {
      return Policy.insured
    }
    
    // 'value' attribute on TextInput (id=AccountName_Input) at PolicyGeneralPanelSet.Auto.pcf: line 116, column 67
    function valueRoot_82 () : java.lang.Object {
      return Policy.PolicyAccount.AccountHolder
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at PolicyGeneralPanelSet.Auto.pcf: line 28, column 40
    function value_1 () : java.lang.String {
      return Policy.PolicyNumber
    }
    
    // 'value' attribute on TextInput (id=edition_number_ext_Input) at PolicyGeneralPanelSet.Auto.pcf: line 42, column 39
    function value_10 () : java.lang.String {
      return Policy.Edition_Ext
    }
    
    // 'value' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_109 () : entity.Contact {
      return Policy.policyholder
    }
    
    // 'value' attribute on TypeKeyInput (id=state_ext_Input) at PolicyGeneralPanelSet.Auto.pcf: line 48, column 38
    function value_13 () : typekey.State {
      return Policy.PolicyState_Ext
    }
    
    // 'value' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_134 () : entity.Company {
      return Policy.doingbusinessas
    }
    
    // 'value' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_167 () : entity.Contact {
      return Policy.agent
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at PolicyGeneralPanelSet.Auto.pcf: line 56, column 41
    function value_17 () : java.util.Date {
      return Policy.EffectiveDate
    }
    
    // 'value' attribute on TextInput (id=ProducerCode_Input) at PolicyGeneralPanelSet.Auto.pcf: line 188, column 40
    function value_179 () : java.lang.String {
      return Policy.ProducerCode
    }
    
    // 'value' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_195 () : entity.Person {
      return Policy.underwriter
    }
    
    // 'value' attribute on TypeKeyInput (id=Underwriting_Company_Input) at PolicyGeneralPanelSet.Auto.pcf: line 207, column 56
    function value_208 () : typekey.UnderwritingCompanyType {
      return Policy.UnderwritingCo
    }
    
    // 'value' attribute on TypeKeyInput (id=Underwriting_Group_Input) at PolicyGeneralPanelSet.Auto.pcf: line 213, column 54
    function value_214 () : typekey.UnderwritingGroupType {
      return Policy.UnderwritingGroup
    }
    
    // 'value' attribute on BooleanRadioInput (id=Other_VerifiedPolicy_Input) at PolicyGeneralPanelSet.Auto.pcf: line 220, column 36
    function value_219 () : java.lang.Boolean {
      return Policy.Verified
    }
    
    // 'value' attribute on BooleanRadioInput (id=Other_ForeignCoverage_Input) at PolicyGeneralPanelSet.Auto.pcf: line 225, column 43
    function value_223 () : java.lang.Boolean {
      return Policy.ForeignCoverage
    }
    
    // 'value' attribute on TextInput (id=Other_OtherFinancialInterests_Input) at PolicyGeneralPanelSet.Auto.pcf: line 230, column 46
    function value_229 () : java.lang.String {
      return Policy.FinancialInterests
    }
    
    // 'value' attribute on DateInput (id=ExpirationDate_Input) at PolicyGeneralPanelSet.Auto.pcf: line 62, column 42
    function value_23 () : java.util.Date {
      return Policy.ExpirationDate
    }
    
    // 'value' attribute on BooleanRadioInput (id=Other_AssignedRisk_Input) at PolicyGeneralPanelSet.Auto.pcf: line 235, column 40
    function value_235 () : java.lang.Boolean {
      return Policy.AssignedRisk
    }
    
    // 'value' attribute on TextInput (id=Other_Notes_Input) at PolicyGeneralPanelSet.Auto.pcf: line 240, column 33
    function value_241 () : java.lang.String {
      return Policy.Notes
    }
    
    // 'value' attribute on DateInput (id=CancellationDate_Input) at PolicyGeneralPanelSet.Auto.pcf: line 69, column 44
    function value_29 () : java.util.Date {
      return Policy.CancellationDate
    }
    
    // 'value' attribute on DateInput (id=OrigEffectiveDate_Input) at PolicyGeneralPanelSet.Auto.pcf: line 76, column 45
    function value_35 () : java.util.Date {
      return Policy.OrigEffectiveDate
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at PolicyGeneralPanelSet.Auto.pcf: line 34, column 43
    function value_4 () : typekey.PolicyType {
      return Policy.PolicyType
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at PolicyGeneralPanelSet.Auto.pcf: line 82, column 45
    function value_41 () : typekey.PolicyStatus {
      return Policy.Status
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at PolicyGeneralPanelSet.Auto.pcf: line 89, column 68
    function value_48 () : typekey.Currency {
      return Policy.Currency
    }
    
    // 'value' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_65 () : entity.Contact {
      return Policy.insured
    }
    
    // 'value' attribute on TextInput (id=form_number_ext_Input) at PolicyGeneralPanelSet.Auto.pcf: line 38, column 42
    function value_7 () : java.lang.String {
      return Policy.FormNumber_Ext
    }
    
    // 'value' attribute on TextAreaInput (id=Insured_Address_Input) at PolicyGeneralPanelSet.Auto.pcf: line 107, column 61
    function value_78 () : java.lang.String {
      return Policy.insured.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on TextInput (id=AccountName_Input) at PolicyGeneralPanelSet.Auto.pcf: line 116, column 67
    function value_81 () : java.lang.String {
      return Policy.PolicyAccount.AccountHolder.DisplayName
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at PolicyGeneralPanelSet.Auto.pcf: line 122, column 40
    function value_85 () : java.lang.String {
      return Policy.AccountNumber
    }
    
    // 'value' attribute on RangeInput (id=CustomerServiceTierRange_Input) at PolicyGeneralPanelSet.Auto.pcf: line 131, column 52
    function value_90 () : typekey.CustomerServiceTier {
      return Policy.CustomerServiceTier
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_113 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_113 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_113 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_138 ($$arg :  entity.Company[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_138 ($$arg :  gw.api.database.IQueryBeanResult<entity.Company>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_138 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_171 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_171 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_171 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_199 ($$arg :  entity.Person[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_199 ($$arg :  gw.api.database.IQueryBeanResult<entity.Person>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_199 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_69 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_69 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_69 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CustomerServiceTierRange_Input) at PolicyGeneralPanelSet.Auto.pcf: line 131, column 52
    function verifyValueRangeIsAllowedType_94 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CustomerServiceTierRange_Input) at PolicyGeneralPanelSet.Auto.pcf: line 131, column 52
    function verifyValueRangeIsAllowedType_94 ($$arg :  typekey.CustomerServiceTier[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_114 () : void {
      var __valueRangeArg = Policy.Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_113(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_139 () : void {
      var __valueRangeArg = Policy.Claim.RelatedCompanyArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_138(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_172 () : void {
      var __valueRangeArg = Policy.Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_171(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_200 () : void {
      var __valueRangeArg = Policy.Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_199(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_70 () : void {
      var __valueRangeArg = Policy.Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_69(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=CustomerServiceTierRange_Input) at PolicyGeneralPanelSet.Auto.pcf: line 131, column 52
    function verifyValueRange_95 () : void {
      var __valueRangeArg = availableCustomerServiceTiers
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_94(__valueRangeArg)
    }
    
    // 'valueType' attribute on ClaimContactInput (id=DBA_Input) at PolicyGeneralPanelSet.Auto.pcf: line 148, column 46
    function verifyValueType_147 () : void {
      var __valueTypeArg : entity.Company
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on ClaimContactInput (id=Underwriter_Name_Input) at PolicyGeneralPanelSet.Auto.pcf: line 201, column 38
    function verifyValueType_206 () : void {
      var __valueTypeArg : entity.Person
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'visible' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_100 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Policy.policyholder), Policy.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 12, column 273
    function visible_105 () : java.lang.Boolean {
      return Policy.CommercialPolicy
    }
    
    // 'visible' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_125 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Policy.doingbusinessas), Policy.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_159 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Policy.agent), Policy.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_187 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Policy.underwriter), Policy.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on TypeKeyInput (id=Currency_Input) at PolicyGeneralPanelSet.Auto.pcf: line 89, column 68
    function visible_47 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    // 'visible' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_54 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_57 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Policy.insured), Policy.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get Policy () : Policy {
      return getRequireValue("Policy", 0) as Policy
    }
    
    property set Policy ($arg :  Policy) {
      setRequireValue("Policy", 0, $arg)
    }
    
    property get availableCustomerServiceTiers () : java.util.List<typekey.CustomerServiceTier> {
      return getVariableValue("availableCustomerServiceTiers", 0) as java.util.List<typekey.CustomerServiceTier>
    }
    
    property set availableCustomerServiceTiers ($arg :  java.util.List<typekey.CustomerServiceTier>) {
      setVariableValue("availableCustomerServiceTiers", 0, $arg)
    }
    
    
  }
  
  
}