package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/workspace/activity/ApprovalDetailDV.RecoveryReserveSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ApprovalDetailDV_RecoveryReserveSetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/workspace/activity/ApprovalDetailDV.RecoveryReserveSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ApprovalDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_17 () : void {
      AddressBookPickerPopup.push(statictypeof (Activity.TransactionSet.CreateUser.Contact), Activity.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_19 () : void {
      if (Activity.TransactionSet.CreateUser.Contact != null) { ClaimContactDetailPopup.push(Activity.TransactionSet.CreateUser.Contact, Activity.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_20 () : void {
      ClaimContactDetailPopup.push(Activity.TransactionSet.CreateUser.Contact, Activity.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_18 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Activity.TransactionSet.CreateUser.Contact), Activity.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_21 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Activity.TransactionSet.CreateUser.Contact, Activity.Claim)
    }
    
    // 'def' attribute on ListViewInput at ApprovalDetailDV.RecoveryReserveSet.pcf: line 16, column 102
    function def_onEnter_0 (def :  pcf.ApprovalHistoryLV) : void {
      def.onEnter(Activity.TransactionSet.ApprovalHistory?.toTypedArray())
    }
    
    // 'def' attribute on ListViewInput at ApprovalDetailDV.RecoveryReserveSet.pcf: line 38, column 40
    function def_onEnter_11 (def :  pcf.UnmodifiableTransactionSetDocumentsLV) : void {
      def.onEnter(Activity.TransactionSet.LinkedDocuments)
    }
    
    // 'def' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_14 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Activity.TransactionSet.CreateUser.Contact), null, Activity.Claim)
    }
    
    // 'def' attribute on ListViewInput at ApprovalDetailDV.RecoveryReserveSet.pcf: line 23, column 122
    function def_onEnter_2 (def :  pcf.RecoveryReserveSetLV) : void {
      def.onEnter((Activity.TransactionSet as RecoveryReserveSet).RecoveryReserves)
    }
    
    // 'def' attribute on ListViewInput at ApprovalDetailDV.RecoveryReserveSet.pcf: line 16, column 102
    function def_refreshVariables_1 (def :  pcf.ApprovalHistoryLV) : void {
      def.refreshVariables(Activity.TransactionSet.ApprovalHistory?.toTypedArray())
    }
    
    // 'def' attribute on ListViewInput at ApprovalDetailDV.RecoveryReserveSet.pcf: line 38, column 40
    function def_refreshVariables_12 (def :  pcf.UnmodifiableTransactionSetDocumentsLV) : void {
      def.refreshVariables(Activity.TransactionSet.LinkedDocuments)
    }
    
    // 'def' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_15 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Activity.TransactionSet.CreateUser.Contact), null, Activity.Claim)
    }
    
    // 'def' attribute on ListViewInput at ApprovalDetailDV.RecoveryReserveSet.pcf: line 23, column 122
    function def_refreshVariables_3 (def :  pcf.RecoveryReserveSetLV) : void {
      def.refreshVariables((Activity.TransactionSet as RecoveryReserveSet).RecoveryReserves)
    }
    
    // 'value' attribute on TextInput (id=ApprovalRationale_Input) at ApprovalDetailDV.RecoveryReserveSet.pcf: line 32, column 42
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      Activity.ApprovalRationale = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_22 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Activity.TransactionSet.CreateUser.Contact); var result = eval("Activity.TransactionSet.CreateUser.Contact = Activity.Claim.resolveContact(Activity.TransactionSet.CreateUser.Contact) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_25 () : java.lang.Object {
      return Activity.Claim.RelatedUserContactArray
    }
    
    // 'value' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_24 () : java.lang.Object {
      return Activity.TransactionSet.CreateUser
    }
    
    // 'value' attribute on DateInput (id=Details_CreateTime_Input) at ApprovalDetailDV.RecoveryReserveSet.pcf: line 54, column 53
    function valueRoot_33 () : java.lang.Object {
      return Activity.TransactionSet
    }
    
    // 'value' attribute on TextInput (id=ApprovalRationale_Input) at ApprovalDetailDV.RecoveryReserveSet.pcf: line 32, column 42
    function valueRoot_7 () : java.lang.Object {
      return Activity
    }
    
    // 'value' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_23 () : entity.UserContact {
      return Activity.TransactionSet.CreateUser.Contact
    }
    
    // 'value' attribute on DateInput (id=Details_CreateTime_Input) at ApprovalDetailDV.RecoveryReserveSet.pcf: line 54, column 53
    function value_32 () : java.util.Date {
      return Activity.TransactionSet.CreateTime
    }
    
    // 'value' attribute on TextInput (id=ApprovalRationale_Input) at ApprovalDetailDV.RecoveryReserveSet.pcf: line 32, column 42
    function value_5 () : java.lang.String {
      return Activity.ApprovalRationale
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_26 ($$arg :  entity.UserContact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_26 ($$arg :  gw.api.database.IQueryBeanResult<entity.UserContact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_26 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_27 () : void {
      var __valueRangeArg = Activity.Claim.RelatedUserContactArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_26(__valueRangeArg)
    }
    
    // 'valueType' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ApprovalDetailDV.RecoveryReserveSet.pcf: line 50, column 41
    function verifyValueType_31 () : void {
      var __valueTypeArg : entity.UserContact
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'visible' attribute on ListViewInput at ApprovalDetailDV.RecoveryReserveSet.pcf: line 38, column 40
    function visible_10 () : java.lang.Boolean {
      return perm.System.viewdocs
    }
    
    // 'visible' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_13 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=Details_CreateUser_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_16 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Activity.TransactionSet.CreateUser.Contact), Activity.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on TextInput (id=ApprovalRationale_Input) at ApprovalDetailDV.RecoveryReserveSet.pcf: line 32, column 42
    function visible_4 () : java.lang.Boolean {
      return Activity.canApprove()
    }
    
    property get Activity () : Activity {
      return getRequireValue("Activity", 0) as Activity
    }
    
    property set Activity ($arg :  Activity) {
      setRequireValue("Activity", 0, $arg)
    }
    
    
  }
  
  
}