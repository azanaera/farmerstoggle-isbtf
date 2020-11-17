package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/newtransaction/check/NewCheckAdditionalPayeeDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewCheckAdditionalPayeeDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/newtransaction/check/NewCheckAdditionalPayeeDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends NewCheckAdditionalPayeeDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 16, column 225
    function action_44 () : void {
      AddressBookPickerPopup.push(statictypeof (CheckPayee.Payee), Check.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 18, column 285
    function action_46 () : void {
      if (CheckPayee.Payee != null) { ClaimContactDetailPopup.push(CheckPayee.Payee, Check.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function action_48 () : void {
      ClaimContactDetailPopup.push(CheckPayee.Payee, Check.Claim)
    }
    
    // 'action' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_45 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (CheckPayee.Payee), Check.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_49 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(CheckPayee.Payee, Check.Claim)
    }
    
    // 'def' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_41 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (CheckPayee.Payee), null, Check.Claim)
    }
    
    // 'def' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_42 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (CheckPayee.Payee), null, Check.Claim)
    }
    
    // 'value' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_52 (__VALUE_TO_SET :  java.lang.Object) : void {
      CheckPayee.Payee = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyCell (id=PayeeType_Cell) at NewCheckAdditionalPayeeDV.pcf: line 89, column 50
    function defaultSetter_63 (__VALUE_TO_SET :  java.lang.Object) : void {
      CheckPayee.PayeeType = (__VALUE_TO_SET as typekey.ContactRole)
    }
    
    // 'onChange' attribute on ClaimContactCell (id=PayeeName_Cell) at NewCheckAdditionalPayeeDV.pcf: line 80, column 70
    function onChange_47 () : void {
      Check.handleOnPickForPayee(CheckPayee)
    }
    
    // 'onPick' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function onPick_50 (PickedValue :  Contact) : void {
      var contactType = statictypeof (CheckPayee.Payee); var result = eval("CheckPayee.Payee = Check.Claim.resolveContact(CheckPayee.Payee) as " + contactType.Name + ";return null;"); Check.handleOnPickForPayee(CheckPayee);
    }
    
    // 'onPick' attribute on ClaimContactCell (id=PayeeName_Cell) at NewCheckAdditionalPayeeDV.pcf: line 78, column 58
    function onPick_57 (PickedValue :  java.lang.Object) : void {
      Check.handleOnPickForPayee(CheckPayee)
    }
    
    // 'validationExpression' attribute on TypeKeyCell (id=PayeeType_Cell) at NewCheckAdditionalPayeeDV.pcf: line 89, column 50
    function validationExpression_61 () : java.lang.Object {
      return CheckPayee.PayeeType == TC_CLAIMANT && !CheckPayee.ClaimContact.isClaimant() ? DisplayKey.get("Java.NewPayment.Error.PayeeIsNotClaimant") : null
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_54 () : java.lang.Object {
      return Check.Claim.PayeeCandidates
    }
    
    // 'value' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_53 () : java.lang.Object {
      return CheckPayee
    }
    
    // 'value' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function value_51 () : entity.Contact {
      return CheckPayee.Payee
    }
    
    // 'value' attribute on TypeKeyCell (id=PayeeType_Cell) at NewCheckAdditionalPayeeDV.pcf: line 89, column 50
    function value_62 () : typekey.ContactRole {
      return CheckPayee.PayeeType
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_55 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_55 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_55 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_56 () : void {
      var __valueRangeArg = Check.Claim.PayeeCandidates
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_55(__valueRangeArg)
    }
    
    // 'visible' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 14, column 229
    function visible_40 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 16, column 225
    function visible_43 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (CheckPayee.Payee), Check.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get CheckPayee () : entity.CheckPayee {
      return getIteratedValue(1) as entity.CheckPayee
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/claim/newtransaction/check/NewCheckAdditionalPayeeDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewCheckAdditionalPayeeDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_11 () : void {
      ClaimContactDetailPopup.push(Check.FirstPayee.Payee, Check.Claim)
    }
    
    // 'action' attribute on ButtonInput (id=AddJointPayees_Input) at NewCheckAdditionalPayeeDV.pcf: line 48, column 48
    function action_36 () : void {
      Check.addNewPayee()
    }
    
    // 'action' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_6 () : void {
      NewCheckWizardAddressBookPickerPopup.push(statictypeof(Check.FirstPayee.Payee), Check.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_8 () : void {
      if (Check.FirstPayee.Payee != null) { ClaimContactDetailPopup.push(Check.FirstPayee.Payee, Check.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_12 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Check.FirstPayee.Payee, Check.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_7 () : pcf.api.Destination {
      return pcf.NewCheckWizardAddressBookPickerPopup.createDestination(statictypeof(Check.FirstPayee.Payee), Check.Claim)
    }
    
    // 'def' attribute on InputSetRef (id=MailingAddressInputSet) at NewCheckAdditionalPayeeDV.pcf: line 160, column 86
    function def_onEnter_116 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(Check.CheckAddressOwner)
    }
    
    // 'def' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_3 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Check.FirstPayee.Payee), null, Check.Claim)
    }
    
    // 'def' attribute on InputSetRef (id=MailingAddressInputSet) at NewCheckAdditionalPayeeDV.pcf: line 160, column 86
    function def_refreshVariables_117 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(Check.CheckAddressOwner)
    }
    
    // 'def' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_4 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Check.FirstPayee.Payee), null, Check.Claim)
    }
    
    // 'value' attribute on CheckBoxInput (id=ToggleAddressEdit_Input) at NewCheckAdditionalPayeeDV.pcf: line 153, column 98
    function defaultSetter_112 (__VALUE_TO_SET :  java.lang.Object) : void {
      showAddressFields = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=EFTRecords_Input) at NewCheckAdditionalPayeeDV.pcf: line 170, column 39
    function defaultSetter_119 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.EFTData = (__VALUE_TO_SET as entity.EFTData)
    }
    
    // 'value' attribute on TextInput (id=BankName_Input) at NewCheckAdditionalPayeeDV.pcf: line 185, column 34
    function defaultSetter_134 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.BankName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeRadioInput (id=BankAccountType_Input) at NewCheckAdditionalPayeeDV.pcf: line 197, column 47
    function defaultSetter_140 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.BankAccountType = (__VALUE_TO_SET as typekey.BankAccountType)
    }
    
    // 'value' attribute on PrivacyInput (id=BankAccountNumber_Input) at NewCheckAdditionalPayeeDV.pcf: line 208, column 43
    function defaultSetter_149 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.BankAccountNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.FirstPayee.Payee = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TextInput (id=BankRoutingNumber_Input) at NewCheckAdditionalPayeeDV.pcf: line 218, column 43
    function defaultSetter_156 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.BankRoutingNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=DeductionType_Input) at NewCheckAdditionalPayeeDV.pcf: line 232, column 44
    function defaultSetter_161 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.DeductionType = (__VALUE_TO_SET as typekey.DeductionType)
    }
    
    // 'value' attribute on TextInput (id=PortionPercentage_Input) at NewCheckAdditionalPayeeDV.pcf: line 257, column 47
    function defaultSetter_169 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.Portion.Percentage = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on Choice (id=PortionPercentageChoice) at NewCheckAdditionalPayeeDV.pcf: line 248, column 41
    function defaultSetter_174 (__VALUE_TO_SET :  java.lang.Object) : void {
      checkPortionType = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CurrencyInput (id=PortionFixedAmount_Input) at NewCheckAdditionalPayeeDV.pcf: line 272, column 59
    function defaultSetter_178 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.Portion.FixedTransactionAmount = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on RangeInput (id=PrimaryPayee_Type_Input) at NewCheckAdditionalPayeeDV.pcf: line 43, column 48
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.FirstPayee.PayeeType = (__VALUE_TO_SET as typekey.ContactRole)
    }
    
    // 'value' attribute on RangeRadioInput (id=PaymentMethod_Input) at NewCheckAdditionalPayeeDV.pcf: line 103, column 43
    function defaultSetter_74 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.PaymentMethod = (__VALUE_TO_SET as typekey.PaymentMethod)
    }
    
    // 'value' attribute on TextAreaInput (id=PayTo_Input) at NewCheckAdditionalPayeeDV.pcf: line 114, column 63
    function defaultSetter_83 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.PayTo = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=DeliveryMethod_Input) at NewCheckAdditionalPayeeDV.pcf: line 127, column 64
    function defaultSetter_90 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.DeliveryMethod = (__VALUE_TO_SET as typekey.DeliveryMethod)
    }
    
    // 'value' attribute on TextInput (id=MailToContact_Input) at NewCheckAdditionalPayeeDV.pcf: line 134, column 63
    function defaultSetter_96 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.MailTo = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'encryptionExpression' attribute on PrivacyInput (id=BankAccountNumber_Input) at NewCheckAdditionalPayeeDV.pcf: line 208, column 43
    function encryptionExpression_151 (VALUE :  java.lang.String) : java.lang.String {
      return Check.maskBankAccountNumber(VALUE)
    }
    
    // 'filter' attribute on RangeRadioInput (id=PaymentMethod_Input) at NewCheckAdditionalPayeeDV.pcf: line 103, column 43
    function filter_76 (VALUE :  typekey.PaymentMethod, VALUES :  typekey.PaymentMethod[]) : java.lang.Boolean {
      return VALUE !=  PaymentMethod.TC_MANUAL
    }
    
    // 'initialValue' attribute on Variable at NewCheckAdditionalPayeeDV.pcf: line 16, column 23
    function initialValue_0 () : boolean {
      return Check.ShowAddressFields
    }
    
    // 'onChange' attribute on PostOnChange at NewCheckAdditionalPayeeDV.pcf: line 105, column 56
    function onChange_72 () : void {
      Check.handleOnPickForPayee(null)
    }
    
    // 'onChange' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at NewCheckAdditionalPayeeDV.pcf: line 33, column 126
    function onChange_9 () : void {
      Check.handleOnPickForPayee(Check.FirstPayee); showAddressFields = !Check.addressRequiredFieldsValid();
    }
    
    // 'onPick' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_13 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Check.FirstPayee.Payee); var result = eval("Check.FirstPayee.Payee = Check.Claim.resolveContact(Check.FirstPayee.Payee) as " + contactType.Name + ";return null;"); Check.handleOnPickForPayee(Check.FirstPayee); showAddressFields = !Check.addressRequiredFieldsValid();;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at NewCheckAdditionalPayeeDV.pcf: line 31, column 47
    function onPick_21 (PickedValue :  java.lang.Object) : void {
      Check.handleOnPickForPayee(Check.FirstPayee); showAddressFields = !Check.addressRequiredFieldsValid();
    }
    
    // 'value' attribute on Reflect at NewCheckAdditionalPayeeDV.pcf: line 179, column 40
    function reflectionValue_125 (TRIGGER_INDEX :  int, VALUE :  entity.EFTData) : java.lang.Object {
      return VALUE.AccountName
    }
    
    // 'value' attribute on Reflect at NewCheckAdditionalPayeeDV.pcf: line 188, column 37
    function reflectionValue_131 (TRIGGER_INDEX :  int, VALUE :  entity.EFTData) : java.lang.Object {
      return VALUE.BankName
    }
    
    // 'value' attribute on Reflect at NewCheckAdditionalPayeeDV.pcf: line 200, column 44
    function reflectionValue_137 (TRIGGER_INDEX :  int, VALUE :  entity.EFTData) : java.lang.Object {
      return VALUE.BankAccountType
    }
    
    // 'value' attribute on Reflect at NewCheckAdditionalPayeeDV.pcf: line 211, column 46
    function reflectionValue_146 (TRIGGER_INDEX :  int, VALUE :  entity.EFTData) : java.lang.Object {
      return VALUE.BankAccountNumber
    }
    
    // 'value' attribute on Reflect at NewCheckAdditionalPayeeDV.pcf: line 221, column 46
    function reflectionValue_153 (TRIGGER_INDEX :  int, VALUE :  entity.EFTData) : java.lang.Object {
      return VALUE.BankRoutingNumber
    }
    
    // 'required' attribute on TextInput (id=PortionPercentage_Input) at NewCheckAdditionalPayeeDV.pcf: line 257, column 47
    function required_167 () : java.lang.Boolean {
      return checkPortionType
    }
    
    // 'required' attribute on CurrencyInput (id=PortionFixedAmount_Input) at NewCheckAdditionalPayeeDV.pcf: line 272, column 59
    function required_176 () : java.lang.Boolean {
      return !checkPortionType
    }
    
    // 'value' attribute on ClaimContactCell (id=PayeeName_Cell) at NewCheckAdditionalPayeeDV.pcf: line 78, column 58
    function sortValue_38 (CheckPayee :  entity.CheckPayee) : java.lang.Object {
      return CheckPayee.Payee
    }
    
    // 'value' attribute on TypeKeyCell (id=PayeeType_Cell) at NewCheckAdditionalPayeeDV.pcf: line 89, column 50
    function sortValue_39 (CheckPayee :  entity.CheckPayee) : java.lang.Object {
      return CheckPayee.PayeeType
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at NewCheckAdditionalPayeeDV.pcf: line 68, column 45
    function toCreateAndAdd_67 () : entity.CheckPayee {
      return Check.addNewPayee()
    }
    
    // 'toRemove' attribute on RowIterator at NewCheckAdditionalPayeeDV.pcf: line 68, column 45
    function toRemove_68 (CheckPayee :  entity.CheckPayee) : void {
      Check.removeFromPayees(CheckPayee); Check.handleOnPickForPayee(null);
    }
    
    // 'validationExpression' attribute on TextInput (id=PortionPercentage_Input) at NewCheckAdditionalPayeeDV.pcf: line 257, column 47
    function validationExpression_166 () : java.lang.Object {
      return ((Check.Portion.FixedTransactionAmount == null and Check.Portion.Percentage == null) ? DisplayKey.get("NVV.Financials.NewCheckPayee.Check.CheckPortion.NoValueError") : null)
    }
    
    // 'validationExpression' attribute on CurrencyInput (id=PortionFixedAmount_Input) at NewCheckAdditionalPayeeDV.pcf: line 272, column 59
    function validationExpression_175 () : java.lang.Object {
      return ((Check.Portion.FixedTransactionAmount == null and Check.Portion.Percentage == null) ? DisplayKey.get("NVV.Financials.NewCheckPayee.Check.CheckPortion.NoValueError") : (Check.Portion.FixedTransactionAmount != null and Check.Portion.FixedTransactionAmount.Amount < 0 ) ? DisplayKey.get("NVV.Financials.NewCheckPayee.Check.CheckPortion.FixedAmtNegValueError") : null)
    }
    
    // 'validationExpression' attribute on ListViewPanel (id=NewCheckPayeeDVPayeesLV) at NewCheckAdditionalPayeeDV.pcf: line 61, column 75
    function validationExpression_70 () : java.lang.Object {
      Check.validateCheckPayees(); return null
    }
    
    // 'valueRange' attribute on RangeInput (id=EFTRecords_Input) at NewCheckAdditionalPayeeDV.pcf: line 170, column 39
    function valueRange_121 () : java.lang.Object {
      return Check.FirstPayee.Payee.EFTRecords
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=BankAccountType_Input) at NewCheckAdditionalPayeeDV.pcf: line 197, column 47
    function valueRange_142 () : java.lang.Object {
      return BankAccountType.getTypeKeys( false )
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_17 () : java.lang.Object {
      return Check.Claim.PayeeCandidates
    }
    
    // 'valueRange' attribute on RangeInput (id=PrimaryPayee_Type_Input) at NewCheckAdditionalPayeeDV.pcf: line 43, column 48
    function valueRange_30 () : java.lang.Object {
      return Check.getAllowedPayeeTypes(Check.FirstPayee.Payee)
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=PaymentMethod_Input) at NewCheckAdditionalPayeeDV.pcf: line 103, column 43
    function valueRange_77 () : java.lang.Object {
      return PaymentMethod.getTypeKeys( false )
    }
    
    // 'value' attribute on TextInput (id=MailingAddress_Input) at NewCheckAdditionalPayeeDV.pcf: line 146, column 64
    function valueRoot_107 () : java.lang.Object {
      return Check.CheckAddressOwner
    }
    
    // 'value' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_16 () : java.lang.Object {
      return Check.FirstPayee
    }
    
    // 'value' attribute on TextInput (id=PortionPercentage_Input) at NewCheckAdditionalPayeeDV.pcf: line 257, column 47
    function valueRoot_170 () : java.lang.Object {
      return Check.Portion
    }
    
    // 'value' attribute on RangeRadioInput (id=PaymentMethod_Input) at NewCheckAdditionalPayeeDV.pcf: line 103, column 43
    function valueRoot_75 () : java.lang.Object {
      return Check
    }
    
    // 'value' attribute on TextInput (id=OldMailingAddress_Input) at NewCheckAdditionalPayeeDV.pcf: line 140, column 99
    function value_101 () : java.lang.String {
      return Check.OldMailToAddress
    }
    
    // 'value' attribute on TextInput (id=MailingAddress_Input) at NewCheckAdditionalPayeeDV.pcf: line 146, column 64
    function value_106 () : entity.Address {
      return Check.CheckAddressOwner.Address
    }
    
    // 'value' attribute on CheckBoxInput (id=ToggleAddressEdit_Input) at NewCheckAdditionalPayeeDV.pcf: line 153, column 98
    function value_111 () : java.lang.Boolean {
      return showAddressFields
    }
    
    // 'value' attribute on RangeInput (id=EFTRecords_Input) at NewCheckAdditionalPayeeDV.pcf: line 170, column 39
    function value_118 () : entity.EFTData {
      return Check.EFTData
    }
    
    // 'value' attribute on TextInput (id=BankName_Input) at NewCheckAdditionalPayeeDV.pcf: line 185, column 34
    function value_133 () : java.lang.String {
      return Check.BankName
    }
    
    // 'value' attribute on RangeRadioInput (id=BankAccountType_Input) at NewCheckAdditionalPayeeDV.pcf: line 197, column 47
    function value_139 () : typekey.BankAccountType {
      return Check.BankAccountType
    }
    
    // 'value' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_14 () : entity.Contact {
      return Check.FirstPayee.Payee
    }
    
    // 'value' attribute on PrivacyInput (id=BankAccountNumber_Input) at NewCheckAdditionalPayeeDV.pcf: line 208, column 43
    function value_148 () : java.lang.String {
      return Check.BankAccountNumber
    }
    
    // 'value' attribute on TextInput (id=BankRoutingNumber_Input) at NewCheckAdditionalPayeeDV.pcf: line 218, column 43
    function value_155 () : java.lang.String {
      return Check.BankRoutingNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=DeductionType_Input) at NewCheckAdditionalPayeeDV.pcf: line 232, column 44
    function value_160 () : typekey.DeductionType {
      return Check.DeductionType
    }
    
    // 'value' attribute on TextInput (id=PortionPercentage_Input) at NewCheckAdditionalPayeeDV.pcf: line 257, column 47
    function value_168 () : java.math.BigDecimal {
      return Check.Portion.Percentage
    }
    
    // 'value' attribute on CurrencyInput (id=PortionFixedAmount_Input) at NewCheckAdditionalPayeeDV.pcf: line 272, column 59
    function value_177 () : gw.api.financials.CurrencyAmount {
      return Check.Portion.FixedTransactionAmount
    }
    
    // 'value' attribute on RangeInput (id=PrimaryPayee_Type_Input) at NewCheckAdditionalPayeeDV.pcf: line 43, column 48
    function value_27 () : typekey.ContactRole {
      return Check.FirstPayee.PayeeType
    }
    
    // 'value' attribute on RowIterator at NewCheckAdditionalPayeeDV.pcf: line 68, column 45
    function value_69 () : entity.CheckPayee[] {
      return Check.Payees
    }
    
    // 'value' attribute on RangeRadioInput (id=PaymentMethod_Input) at NewCheckAdditionalPayeeDV.pcf: line 103, column 43
    function value_73 () : typekey.PaymentMethod {
      return Check.PaymentMethod
    }
    
    // 'value' attribute on TextAreaInput (id=PayTo_Input) at NewCheckAdditionalPayeeDV.pcf: line 114, column 63
    function value_82 () : java.lang.String {
      return Check.PayTo
    }
    
    // 'value' attribute on TypeKeyInput (id=DeliveryMethod_Input) at NewCheckAdditionalPayeeDV.pcf: line 127, column 64
    function value_89 () : typekey.DeliveryMethod {
      return Check.DeliveryMethod
    }
    
    // 'value' attribute on TextInput (id=MailToContact_Input) at NewCheckAdditionalPayeeDV.pcf: line 134, column 63
    function value_95 () : java.lang.String {
      return Check.MailTo
    }
    
    // 'valueRange' attribute on RangeInput (id=EFTRecords_Input) at NewCheckAdditionalPayeeDV.pcf: line 170, column 39
    function verifyValueRangeIsAllowedType_122 ($$arg :  entity.EFTData[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=EFTRecords_Input) at NewCheckAdditionalPayeeDV.pcf: line 170, column 39
    function verifyValueRangeIsAllowedType_122 ($$arg :  gw.api.database.IQueryBeanResult<entity.EFTData>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=EFTRecords_Input) at NewCheckAdditionalPayeeDV.pcf: line 170, column 39
    function verifyValueRangeIsAllowedType_122 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=BankAccountType_Input) at NewCheckAdditionalPayeeDV.pcf: line 197, column 47
    function verifyValueRangeIsAllowedType_143 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=BankAccountType_Input) at NewCheckAdditionalPayeeDV.pcf: line 197, column 47
    function verifyValueRangeIsAllowedType_143 ($$arg :  typekey.BankAccountType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_18 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_18 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_18 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PrimaryPayee_Type_Input) at NewCheckAdditionalPayeeDV.pcf: line 43, column 48
    function verifyValueRangeIsAllowedType_31 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PrimaryPayee_Type_Input) at NewCheckAdditionalPayeeDV.pcf: line 43, column 48
    function verifyValueRangeIsAllowedType_31 ($$arg :  typekey.ContactRole[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=PaymentMethod_Input) at NewCheckAdditionalPayeeDV.pcf: line 103, column 43
    function verifyValueRangeIsAllowedType_78 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=PaymentMethod_Input) at NewCheckAdditionalPayeeDV.pcf: line 103, column 43
    function verifyValueRangeIsAllowedType_78 ($$arg :  typekey.PaymentMethod[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=EFTRecords_Input) at NewCheckAdditionalPayeeDV.pcf: line 170, column 39
    function verifyValueRange_123 () : void {
      var __valueRangeArg = Check.FirstPayee.Payee.EFTRecords
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_122(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=BankAccountType_Input) at NewCheckAdditionalPayeeDV.pcf: line 197, column 47
    function verifyValueRange_144 () : void {
      var __valueRangeArg = BankAccountType.getTypeKeys( false )
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_143(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_19 () : void {
      var __valueRangeArg = Check.Claim.PayeeCandidates
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_18(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=PrimaryPayee_Type_Input) at NewCheckAdditionalPayeeDV.pcf: line 43, column 48
    function verifyValueRange_32 () : void {
      var __valueRangeArg = Check.getAllowedPayeeTypes(Check.FirstPayee.Payee)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_31(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=PaymentMethod_Input) at NewCheckAdditionalPayeeDV.pcf: line 103, column 43
    function verifyValueRange_79 () : void {
      var __valueRangeArg = PaymentMethod.getTypeKeys( false )
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_78(__valueRangeArg)
    }
    
    // 'visible' attribute on Label at NewCheckAdditionalPayeeDV.pcf: line 20, column 98
    function visible_1 () : java.lang.Boolean {
      return Check.Payees.length <= 1 and Check.PaymentMethod == PaymentMethod.TC_CHECK
    }
    
    // 'visible' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function visible_10 () : java.lang.Boolean {
      return Check.Payees.length <= 1
    }
    
    // 'visible' attribute on TextInput (id=OldMailingAddress_Input) at NewCheckAdditionalPayeeDV.pcf: line 140, column 99
    function visible_100 () : java.lang.Boolean {
      return Check.PaymentMethod != PaymentMethod.TC_EFT and Check.OldMailToAddress != null
    }
    
    // 'visible' attribute on CheckBoxInput (id=ToggleAddressEdit_Input) at NewCheckAdditionalPayeeDV.pcf: line 153, column 98
    function visible_110 () : java.lang.Boolean {
      return Check.PaymentMethod != PaymentMethod.TC_EFT and Check.FirstPayee.Payee != null
    }
    
    // 'visible' attribute on InputSetRef (id=MailingAddressInputSet) at NewCheckAdditionalPayeeDV.pcf: line 160, column 86
    function visible_115 () : java.lang.Boolean {
      return Check.PaymentMethod != PaymentMethod.TC_EFT and showAddressFields
    }
    
    // 'visible' attribute on InputSet (id=EFTDataInputSet) at NewCheckAdditionalPayeeDV.pcf: line 163, column 63
    function visible_159 () : java.lang.Boolean {
      return Check.PaymentMethod == PaymentMethod.TC_EFT
    }
    
    // 'visible' attribute on Label at NewCheckAdditionalPayeeDV.pcf: line 239, column 68
    function visible_164 () : java.lang.Boolean {
      return Check.PaymentMethod == PaymentMethod.TC_CHECK
    }
    
    // 'visible' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_2 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_5 () : java.lang.Boolean {
      return "NewCheckWizardAddressBookPickerPopup.push(statictypeof(Check.FirstPayee.Payee), Check.Claim)" != "" && true
    }
    
    // 'visible' attribute on ListViewInput at NewCheckAdditionalPayeeDV.pcf: line 54, column 46
    function visible_71 () : java.lang.Boolean {
      return Check.Payees.length > 1
    }
    
    // 'visible' attribute on TextAreaInput (id=PayTo_Input) at NewCheckAdditionalPayeeDV.pcf: line 114, column 63
    function visible_81 () : java.lang.Boolean {
      return Check.PaymentMethod != PaymentMethod.TC_EFT
    }
    
    property get Check () : Check {
      return getRequireValue("Check", 0) as Check
    }
    
    property set Check ($arg :  Check) {
      setRequireValue("Check", 0, $arg)
    }
    
    property get Wizard () : gw.api.financials.CheckWizardInfo {
      return getRequireValue("Wizard", 0) as gw.api.financials.CheckWizardInfo
    }
    
    property set Wizard ($arg :  gw.api.financials.CheckWizardInfo) {
      setRequireValue("Wizard", 0, $arg)
    }
    
    property get showAddressFields () : boolean {
      return getVariableValue("showAddressFields", 0) as java.lang.Boolean
    }
    
    property set showAddressFields ($arg :  boolean) {
      setVariableValue("showAddressFields", 0, $arg)
    }
    
    property get checkPortionType() : boolean {
      return Wizard.isCheckPortionPercentage( Check );
    }
    
    property set checkPortionType(isPercentage : boolean) {
      Wizard.setCheckPortionPercentage( Check, isPercentage );
    }
    
    
  }
  
  
}