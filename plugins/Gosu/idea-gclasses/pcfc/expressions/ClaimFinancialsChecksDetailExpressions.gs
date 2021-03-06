package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/financials/checks/ClaimFinancialsChecksDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimFinancialsChecksDetailExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/financials/checks/ClaimFinancialsChecksDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimFinancialsChecksDetailExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (claim :  Claim, check :  Check) : int {
      return 0
    }
    
    static function __constructorIndex (claim :  Claim, check :  Check, autoPaidInvoice :  ServiceRequestInvoice) : int {
      return 1
    }
    
    // 'action' attribute on ToolbarButton (id=ClaimFinancialsChecksDetail_TransferButton) at ClaimFinancialsChecksDetail.pcf: line 67, column 49
    function action_13 () : void {
      CheckTransfer.go(claim, check)
    }
    
    // 'action' attribute on ToolbarButton (id=ClaimFinancialsChecksDetail_VoidStopButton) at ClaimFinancialsChecksDetail.pcf: line 74, column 53
    function action_17 () : void {
      VoidStopCheck.go(claim, check)
    }
    
    // 'action' attribute on ToolbarButton (id=ClaimFinancialsChecksDetail_ReissueButton) at ClaimFinancialsChecksDetail.pcf: line 80, column 53
    function action_21 () : void {
      ReissueCheck.go(claim, check)
    }
    
    // 'action' attribute on ToolbarButton (id=ClaimFinancialsChecksDetail_ResubmitButton) at ClaimFinancialsChecksDetail.pcf: line 87, column 42
    function action_25 () : void {
      resubmitCheck(check)
    }
    
    // 'action' attribute on ToolbarButton (id=ClaimFinancialsChecksDetail_CloneButton) at ClaimFinancialsChecksDetail.pcf: line 93, column 54
    function action_28 () : void {
      CloneCheckWizard.go(claim, check)
    }
    
    // 'action' attribute on ToolbarButton (id=ClaimFinancialsChecksDetail_EditAllButton) at ClaimFinancialsChecksDetail.pcf: line 102, column 85
    function action_32 () : void {
      EditRecurrenceCheckWizard.go(claim, check)
    }
    
    // 'action' attribute on ToolbarButton (id=ClaimFinancialsChecksDetail_ChangeRecurrenceScheduleButton) at ClaimFinancialsChecksDetail.pcf: line 109, column 85
    function action_36 () : void {
      ChangeCheckRecurrence.go(claim, check)
    }
    
    // 'action' attribute on ToolbarButton (id=ClaimFinancialsChecksDetail_EditButton) at ClaimFinancialsChecksDetail.pcf: line 51, column 47
    function action_5 () : void {
      EditCheckWizard.go(claim, check)
    }
    
    // 'action' attribute on ToolbarButton (id=ClaimFinancialsChecksDetail_DeleteButton) at ClaimFinancialsChecksDetail.pcf: line 59, column 47
    function action_9 () : void {
      ensureLocationEditing();  beforeCommitAction = \ -> deleteCheck(check);  afterCommitAction = \ -> ClaimFinancialsChecks.go(claim);  CurrentLocation.commit()
    }
    
    // 'action' attribute on ToolbarButton (id=ClaimFinancialsChecksDetail_TransferButton) at ClaimFinancialsChecksDetail.pcf: line 67, column 49
    function action_dest_14 () : pcf.api.Destination {
      return pcf.CheckTransfer.createDestination(claim, check)
    }
    
    // 'action' attribute on ToolbarButton (id=ClaimFinancialsChecksDetail_VoidStopButton) at ClaimFinancialsChecksDetail.pcf: line 74, column 53
    function action_dest_18 () : pcf.api.Destination {
      return pcf.VoidStopCheck.createDestination(claim, check)
    }
    
    // 'action' attribute on ToolbarButton (id=ClaimFinancialsChecksDetail_ReissueButton) at ClaimFinancialsChecksDetail.pcf: line 80, column 53
    function action_dest_22 () : pcf.api.Destination {
      return pcf.ReissueCheck.createDestination(claim, check)
    }
    
    // 'action' attribute on ToolbarButton (id=ClaimFinancialsChecksDetail_CloneButton) at ClaimFinancialsChecksDetail.pcf: line 93, column 54
    function action_dest_29 () : pcf.api.Destination {
      return pcf.CloneCheckWizard.createDestination(claim, check)
    }
    
    // 'action' attribute on ToolbarButton (id=ClaimFinancialsChecksDetail_EditAllButton) at ClaimFinancialsChecksDetail.pcf: line 102, column 85
    function action_dest_33 () : pcf.api.Destination {
      return pcf.EditRecurrenceCheckWizard.createDestination(claim, check)
    }
    
    // 'action' attribute on ToolbarButton (id=ClaimFinancialsChecksDetail_ChangeRecurrenceScheduleButton) at ClaimFinancialsChecksDetail.pcf: line 109, column 85
    function action_dest_37 () : pcf.api.Destination {
      return pcf.ChangeCheckRecurrence.createDestination(claim, check)
    }
    
    // 'action' attribute on ToolbarButton (id=ClaimFinancialsChecksDetail_EditButton) at ClaimFinancialsChecksDetail.pcf: line 51, column 47
    function action_dest_6 () : pcf.api.Destination {
      return pcf.EditCheckWizard.createDestination(claim, check)
    }
    
    // 'afterCommit' attribute on Page (id=ClaimFinancialsChecksDetail) at ClaimFinancialsChecksDetail.pcf: line 13, column 73
    function afterCommit_43 (TopLocation :  pcf.api.Location) : void {
      if (afterCommitAction != null) {afterCommitAction()}
    }
    
    // 'available' attribute on ToolbarButton (id=ClaimFinancialsChecksDetail_TransferButton) at ClaimFinancialsChecksDetail.pcf: line 67, column 49
    function available_11 () : java.lang.Boolean {
      return statusissdabove_Ext and check.isTransferable() and perm.Check.transfer(check)
    }
    
    // 'available' attribute on ToolbarButton (id=ClaimFinancialsChecksDetail_VoidStopButton) at ClaimFinancialsChecksDetail.pcf: line 74, column 53
    function available_15 () : java.lang.Boolean {
      return (statusissdabove_Ext and  (check.Voidable or check.Stoppable)) and perm.Payment.voidorstop(check)
    }
    
    // 'available' attribute on ToolbarButton (id=ClaimFinancialsChecksDetail_ReissueButton) at ClaimFinancialsChecksDetail.pcf: line 80, column 53
    function available_19 () : java.lang.Boolean {
      return statusissdabove_Ext and !check.Bulked and check.Reissueable and perm.Payment.voidorstop(check) and check.PaymentMethod != PaymentMethod.TC_EFT
    }
    
    // 'available' attribute on ToolbarButton (id=ClaimFinancialsChecksDetail_ResubmitButton) at ClaimFinancialsChecksDetail.pcf: line 87, column 42
    function available_23 () : java.lang.Boolean {
      return  check.Resubmittable and perm.Check.edit(check)
    }
    
    // 'available' attribute on ToolbarButton (id=ClaimFinancialsChecksDetail_CloneButton) at ClaimFinancialsChecksDetail.pcf: line 93, column 54
    function available_26 () : java.lang.Boolean {
      return !check.Bulked and perm.Claim.createpayment(claim)
    }
    
    // 'available' attribute on ToolbarButton (id=ClaimFinancialsChecksDetail_EditButton) at ClaimFinancialsChecksDetail.pcf: line 51, column 47
    function available_3 () : java.lang.Boolean {
      return !check.Bulked and ((check.Group != null) ? check.Group.isEditable() : check.isEditable()) and (!check.CheckSet.Recurring || check.CheckSet.Approved) and perm.Payment.edit(check)
    }
    
    // 'available' attribute on ToolbarButton (id=ClaimFinancialsChecksDetail_EditAllButton) at ClaimFinancialsChecksDetail.pcf: line 102, column 85
    function available_30 () : java.lang.Boolean {
      return check.CheckSet.Recurrence != null and check.CheckSet.Recurrence.hasEditableChecks() and perm.Payment.edit(check)
    }
    
    // 'available' attribute on ToolbarButton (id=ClaimFinancialsChecksDetail_DeleteButton) at ClaimFinancialsChecksDetail.pcf: line 59, column 47
    function available_7 () : java.lang.Boolean {
      return !check.Bulked and check.Deletable and perm.Payment.edit(check)
    }
    
    // 'beforeCommit' attribute on Page (id=ClaimFinancialsChecksDetail) at ClaimFinancialsChecksDetail.pcf: line 13, column 73
    function beforeCommit_44 (pickedValue :  java.lang.Object) : void {
      if (beforeCommitAction != null) {beforeCommitAction()}
    }
    
    // 'canVisit' attribute on Page (id=ClaimFinancialsChecksDetail) at ClaimFinancialsChecksDetail.pcf: line 13, column 73
    static function canVisit_45 (autoPaidInvoice :  ServiceRequestInvoice, check :  Check, claim :  Claim) : java.lang.Boolean {
      return perm.Check.view(check)
    }
    
    // 'confirmMessage' attribute on ToolbarButton (id=ClaimFinancialsChecksDetail_DeleteButton) at ClaimFinancialsChecksDetail.pcf: line 59, column 47
    function confirmMessage_10 () : java.lang.String {
      return getDeleteConfirmationMsg(check)
    }
    
    // 'def' attribute on PanelRef at ClaimFinancialsChecksDetail.pcf: line 117, column 35
    function def_onEnter_41 (def :  pcf.CheckDV) : void {
      def.onEnter(check)
    }
    
    // 'def' attribute on PanelRef at ClaimFinancialsChecksDetail.pcf: line 117, column 35
    function def_refreshVariables_42 (def :  pcf.CheckDV) : void {
      def.refreshVariables(check)
    }
    
    // 'initialValue' attribute on Variable at ClaimFinancialsChecksDetail.pcf: line 30, column 23
    function initialValue_0 () : block() {
      return null
    }
    
    // 'initialValue' attribute on Variable at ClaimFinancialsChecksDetail.pcf: line 41, column 23
    function initialValue_2 () : boolean {
      return check.Status == TransactionStatus.TC_ISSUED or check.Status == TransactionStatus.TC_CLEARED
    }
    
    // 'label' attribute on AlertBar (id=InvoiceWasAutoPaid) at ClaimFinancialsChecksDetail.pcf: line 114, column 44
    function label_39 () : java.lang.Object {
      return autoPaidInvoice.ReferenceNumber.HasContent ? DisplayKey.get("Web.Plugin.InvoiceAutoApproveAutoPayPlugin.AutoPaidWithReferenceNumber", autoPaidInvoice.ReferenceNumber, autoPaidInvoice.Amount) : DisplayKey.get("Web.Plugin.InvoiceAutoApproveAutoPayPlugin.AutoPaid", autoPaidInvoice.Amount)
    }
    
    // 'parent' attribute on Page (id=ClaimFinancialsChecksDetail) at ClaimFinancialsChecksDetail.pcf: line 13, column 73
    static function parent_46 (autoPaidInvoice :  ServiceRequestInvoice, check :  Check, claim :  Claim) : pcf.api.Destination {
      return pcf.ClaimFinancialsChecks.createDestination(claim)
    }
    
    // 'visible' attribute on ToolbarButton (id=ClaimFinancialsChecksDetail_TransferButton) at ClaimFinancialsChecksDetail.pcf: line 67, column 49
    function visible_12 () : java.lang.Boolean {
      return perm.Check.transfer(check)
    }
    
    // 'visible' attribute on ToolbarButton (id=ClaimFinancialsChecksDetail_VoidStopButton) at ClaimFinancialsChecksDetail.pcf: line 74, column 53
    function visible_16 () : java.lang.Boolean {
      return perm.Payment.voidorstop(check)
    }
    
    // 'visible' attribute on ToolbarButton (id=ClaimFinancialsChecksDetail_ResubmitButton) at ClaimFinancialsChecksDetail.pcf: line 87, column 42
    function visible_24 () : java.lang.Boolean {
      return check.Resubmittable
    }
    
    // 'visible' attribute on ToolbarButton (id=ClaimFinancialsChecksDetail_CloneButton) at ClaimFinancialsChecksDetail.pcf: line 93, column 54
    function visible_27 () : java.lang.Boolean {
      return perm.Claim.createpayment(claim)
    }
    
    // 'visible' attribute on ToolbarButton (id=ClaimFinancialsChecksDetail_EditAllButton) at ClaimFinancialsChecksDetail.pcf: line 102, column 85
    function visible_31 () : java.lang.Boolean {
      return check.CheckSet.Recurrence != null and perm.Payment.edit(check)
    }
    
    // 'visible' attribute on AlertBar (id=InvoiceWasAutoPaid) at ClaimFinancialsChecksDetail.pcf: line 114, column 44
    function visible_38 () : java.lang.Boolean {
      return autoPaidInvoice != null
    }
    
    // 'visible' attribute on ToolbarButton (id=ClaimFinancialsChecksDetail_EditButton) at ClaimFinancialsChecksDetail.pcf: line 51, column 47
    function visible_4 () : java.lang.Boolean {
      return perm.Payment.edit(check)
    }
    
    // 'visible' attribute on PanelRef at ClaimFinancialsChecksDetail.pcf: line 117, column 35
    function visible_40 () : java.lang.Boolean {
      return !check.Retired
    }
    
    property get CheckView () : CheckView {
      return getVariableValue("CheckView", 0) as CheckView
    }
    
    property set CheckView ($arg :  CheckView) {
      setVariableValue("CheckView", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.ClaimFinancialsChecksDetail {
      return super.CurrentLocation as pcf.ClaimFinancialsChecksDetail
    }
    
    property get afterCommitAction () : block() {
      return getVariableValue("afterCommitAction", 0) as block()
    }
    
    property set afterCommitAction ($arg :  block()) {
      setVariableValue("afterCommitAction", 0, $arg)
    }
    
    property get autoPaidInvoice () : ServiceRequestInvoice {
      return getVariableValue("autoPaidInvoice", 0) as ServiceRequestInvoice
    }
    
    property set autoPaidInvoice ($arg :  ServiceRequestInvoice) {
      setVariableValue("autoPaidInvoice", 0, $arg)
    }
    
    property get beforeCommitAction () : block() {
      return getVariableValue("beforeCommitAction", 0) as block()
    }
    
    property set beforeCommitAction ($arg :  block()) {
      setVariableValue("beforeCommitAction", 0, $arg)
    }
    
    property get check () : Check {
      return getVariableValue("check", 0) as Check
    }
    
    property set check ($arg :  Check) {
      setVariableValue("check", 0, $arg)
    }
    
    property get claim () : Claim {
      return getVariableValue("claim", 0) as Claim
    }
    
    property set claim ($arg :  Claim) {
      setVariableValue("claim", 0, $arg)
    }
    
    property get statusissdabove_Ext () : boolean {
      return getVariableValue("statusissdabove_Ext", 0) as java.lang.Boolean
    }
    
    property set statusissdabove_Ext ($arg :  boolean) {
      setVariableValue("statusissdabove_Ext", 0, $arg)
    }
    
    function deleteCheck(aCheck: Check) {
      // only unlink deductible if the deleted check is the primary check or not in a checkgroup. 
      if (aCheck.Group == null or (aCheck.Group != null and aCheck.PublicID == aCheck.Group.PrimaryCheck.PublicID)) {
        aCheck.unlinkDeductibles()
      }
      aCheck.delete()
    }
    
    function getDeleteConfirmationMsg(chk: Check): java.lang.String {
      var invoiceList = chk.BulletedListOfServiceRequestInvoicesForWarning
      if (chk.Primary) {
        if (invoiceList != null) {
          return DisplayKey.get("Java.Financials.DeleteCheckWithInvoices.Tip", ServiceRequestInvoiceStatus.TC_APPROVED.DisplayName, invoiceList)
        } else {
          return DisplayKey.get("Java.Financials.DeleteCheck.Tip")
        }
      } else {
        if (invoiceList != null) {
          return DisplayKey.get("Java.Financials.DeleteCheckWithInvoices.Tip.Secondary", ServiceRequestInvoiceStatus.TC_APPROVED.DisplayName, invoiceList)
        } else {
          return DisplayKey.get("Java.Financials.DeleteCheck.Tip.Secondary");
        }
      }
    }
    
    function resubmitCheck(rcheck: Check) {
      ensureLocationEditing()
      var success = false
      try {
        //relinks the deductible
        rcheck.relinkFormerDeductiblesForResubmit()
        rcheck.resubmit()
        CurrentLocation.commit()
        success = true
      } finally {
        if (!success) {
          CurrentLocation.cancel()
        }
      }
    }
    
    function ensureLocationEditing() {
      if (!CurrentLocation.InEditMode) {
        CurrentLocation.startEditing();
      }
    }
    
    
  }
  
  
}