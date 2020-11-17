package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/workspace/activity/ApprovalDetailDV.RecoverySet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ApprovalDetailDV_RecoverySetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/workspace/activity/ApprovalDetailDV.RecoverySet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ApprovalDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_28 () : void {
      AddressBookPickerPopup.push(statictypeof (Activity.TransactionSet.CreateUser.Contact), Activity.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_30 () : void {
      if (Activity.TransactionSet.CreateUser.Contact != null) { ClaimContactDetailPopup.push(Activity.TransactionSet.CreateUser.Contact, Activity.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_31 () : void {
      ClaimContactDetailPopup.push(Activity.TransactionSet.CreateUser.Contact, Activity.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_29 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Activity.TransactionSet.CreateUser.Contact), Activity.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_32 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Activity.TransactionSet.CreateUser.Contact, Activity.Claim)
    }
    
    // 'def' attribute on ListViewInput at ApprovalDetailDV.RecoverySet.pcf: line 16, column 95
    function def_onEnter_0 (def :  pcf.ApprovalHistoryLV) : void {
      def.onEnter(Activity.TransactionSet.ApprovalHistory?.toTypedArray())
    }
    
    // 'def' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_25 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Activity.TransactionSet.CreateUser.Contact), null, Activity.Claim)
    }
    
    // 'def' attribute on ListViewInput at ApprovalDetailDV.RecoverySet.pcf: line 16, column 95
    function def_refreshVariables_1 (def :  pcf.ApprovalHistoryLV) : void {
      def.refreshVariables(Activity.TransactionSet.ApprovalHistory?.toTypedArray())
    }
    
    // 'def' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_26 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Activity.TransactionSet.CreateUser.Contact), null, Activity.Claim)
    }
    
    // 'value' attribute on TextInput (id=ApprovalRationale_Input) at ApprovalDetailDV.RecoverySet.pcf: line 25, column 42
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      Activity.ApprovalRationale = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_33 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Activity.TransactionSet.CreateUser.Contact); var result = eval("Activity.TransactionSet.CreateUser.Contact = Activity.Claim.resolveContact(Activity.TransactionSet.CreateUser.Contact) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_36 () : java.lang.Object {
      return Activity.Claim.RelatedUserContactArray
    }
    
    // 'value' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_35 () : java.lang.Object {
      return Activity.TransactionSet.CreateUser
    }
    
    // 'value' attribute on DateInput (id=Details_CreateTime_Input) at ApprovalDetailDV.RecoverySet.pcf: line 76, column 53
    function valueRoot_44 () : java.lang.Object {
      return Activity.TransactionSet
    }
    
    // 'value' attribute on TextInput (id=ApprovalRationale_Input) at ApprovalDetailDV.RecoverySet.pcf: line 25, column 42
    function valueRoot_5 () : java.lang.Object {
      return Activity
    }
    
    // 'value' attribute on TypeKeyInput (id=Recovery_Coverage_Input) at ApprovalDetailDV.RecoverySet.pcf: line 35, column 43
    function value_10 () : typekey.CoverageType {
      return (Activity.TransactionSet as RecoverySet).Recoveries[0].Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TypeKeyInput (id=Recovery_CostType_Input) at ApprovalDetailDV.RecoverySet.pcf: line 40, column 39
    function value_12 () : typekey.CostType {
      return (Activity.TransactionSet as RecoverySet).Recoveries[0].CostType
    }
    
    // 'value' attribute on TypeKeyInput (id=Recovery_CostCategory_Input) at ApprovalDetailDV.RecoverySet.pcf: line 45, column 43
    function value_14 () : typekey.CostCategory {
      return (Activity.TransactionSet as RecoverySet).Recoveries[0].CostCategory
    }
    
    // 'value' attribute on TypeKeyInput (id=Recovery_ReservingCurrency_Input) at ApprovalDetailDV.RecoverySet.pcf: line 51, column 72
    function value_17 () : typekey.Currency {
      return (Activity.TransactionSet as RecoverySet).Recoveries[0].ReservingCurrency
    }
    
    // 'value' attribute on TypeKeyInput (id=Recovery_RecoveryCategory_Input) at ApprovalDetailDV.RecoverySet.pcf: line 56, column 47
    function value_20 () : typekey.RecoveryCategory {
      return (Activity.TransactionSet as RecoverySet).Recoveries[0].RecoveryCategory
    }
    
    // 'value' attribute on CurrencyInput (id=Recovery_Amount_Input) at ApprovalDetailDV.RecoverySet.pcf: line 62, column 53
    function value_22 () : gw.api.financials.IPairedMoney {
      return (Activity.TransactionSet as RecoverySet).Recoveries[0].TransactionAmountReservingAmountPair
    }
    
    // 'value' attribute on TextInput (id=ApprovalRationale_Input) at ApprovalDetailDV.RecoverySet.pcf: line 25, column 42
    function value_3 () : java.lang.String {
      return Activity.ApprovalRationale
    }
    
    // 'value' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_34 () : entity.UserContact {
      return Activity.TransactionSet.CreateUser.Contact
    }
    
    // 'value' attribute on DateInput (id=Details_CreateTime_Input) at ApprovalDetailDV.RecoverySet.pcf: line 76, column 53
    function value_43 () : java.util.Date {
      return Activity.TransactionSet.CreateTime
    }
    
    // 'value' attribute on TextInput (id=Recovery_Exposure_Input) at ApprovalDetailDV.RecoverySet.pcf: line 30, column 94
    function value_8 () : java.lang.String {
      return (Activity.TransactionSet as RecoverySet).Recoveries[0].Exposure.DisplayName
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_37 ($$arg :  entity.UserContact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_37 ($$arg :  gw.api.database.IQueryBeanResult<entity.UserContact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_37 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_38 () : void {
      var __valueRangeArg = Activity.Claim.RelatedUserContactArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_37(__valueRangeArg)
    }
    
    // 'valueType' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ApprovalDetailDV.RecoverySet.pcf: line 72, column 41
    function verifyValueType_42 () : void {
      var __valueTypeArg : entity.UserContact
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'visible' attribute on TypeKeyInput (id=Recovery_ReservingCurrency_Input) at ApprovalDetailDV.RecoverySet.pcf: line 51, column 72
    function visible_16 () : java.lang.Boolean {
      return gw.util.CCConfigUtil.AllowExplicitReservingCurrency
    }
    
    // 'visible' attribute on TextInput (id=ApprovalRationale_Input) at ApprovalDetailDV.RecoverySet.pcf: line 25, column 42
    function visible_2 () : java.lang.Boolean {
      return Activity.canApprove()
    }
    
    // 'visible' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_24 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_27 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Activity.TransactionSet.CreateUser.Contact), Activity.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get Activity () : Activity {
      return getRequireValue("Activity", 0) as Activity
    }
    
    property set Activity ($arg :  Activity) {
      setRequireValue("Activity", 0, $arg)
    }
    
    
  }
  
  
}