package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/policy/ClaimPolicyGeneral.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimPolicyGeneralExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/policy/ClaimPolicyGeneral.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimPolicyGeneralExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (Claim :  Claim) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=ViewInPC) at ClaimPolicyGeneral.pcf: line 102, column 121
    function action_10 () : void {
      ViewPolicy.push(gw.api.system.CCConfigParameters.PolicySystemURL.Value, Claim.Policy.PolicyNumber, Claim.LossDate)
    }
    
    // 'action' attribute on ToolbarButton (id=ClaimPolicyGeneral_RefreshPolicyButton) at ClaimPolicyGeneral.pcf: line 84, column 45
    function action_2 () : void {
      PolicyRefreshWizard.go(getClaimAndCheckForUnsavedWork(), gw.api.policy.refresh.RefreshPolicyFetcher.createForRefresh(Claim))
    }
    
    // 'action' attribute on PickerToolbarButton (id=ClaimPolicyGeneral_SelectPolicyButton) at ClaimPolicyGeneral.pcf: line 93, column 80
    function action_5 () : void {
      ClaimPolicySelectPolicyPopup.push(getClaimAndCheckForUnsavedWork())
    }
    
    // 'action' attribute on ToolbarButton (id=ViewInPC) at ClaimPolicyGeneral.pcf: line 102, column 121
    function action_dest_11 () : pcf.api.Destination {
      return pcf.ViewPolicy.createDestination(gw.api.system.CCConfigParameters.PolicySystemURL.Value, Claim.Policy.PolicyNumber, Claim.LossDate)
    }
    
    // 'action' attribute on ToolbarButton (id=ClaimPolicyGeneral_RefreshPolicyButton) at ClaimPolicyGeneral.pcf: line 84, column 45
    function action_dest_3 () : pcf.api.Destination {
      return pcf.PolicyRefreshWizard.createDestination(getClaimAndCheckForUnsavedWork(), gw.api.policy.refresh.RefreshPolicyFetcher.createForRefresh(Claim))
    }
    
    // 'action' attribute on PickerToolbarButton (id=ClaimPolicyGeneral_SelectPolicyButton) at ClaimPolicyGeneral.pcf: line 93, column 80
    function action_dest_6 () : pcf.api.Destination {
      return pcf.ClaimPolicySelectPolicyPopup.createDestination(getClaimAndCheckForUnsavedWork())
    }
    
    // 'canVisit' attribute on Page (id=ClaimPolicyGeneral) at ClaimPolicyGeneral.pcf: line 11, column 33
    static function canVisit_24 (Claim :  Claim) : java.lang.Boolean {
      return perm.Policy.view(Claim) and perm.System.viewpolicy
    }
    
    // 'def' attribute on PanelRef at ClaimPolicyGeneral.pcf: line 106, column 80
    function def_onEnter_13 (def :  pcf.PolicyGeneralPanelSet_Auto) : void {
      def.onEnter(Claim.Policy, Claim)
    }
    
    // 'def' attribute on PanelRef at ClaimPolicyGeneral.pcf: line 106, column 80
    function def_onEnter_15 (def :  pcf.PolicyGeneralPanelSet_Gl) : void {
      def.onEnter(Claim.Policy, Claim)
    }
    
    // 'def' attribute on PanelRef at ClaimPolicyGeneral.pcf: line 106, column 80
    function def_onEnter_17 (def :  pcf.PolicyGeneralPanelSet_Pr) : void {
      def.onEnter(Claim.Policy, Claim)
    }
    
    // 'def' attribute on PanelRef at ClaimPolicyGeneral.pcf: line 106, column 80
    function def_onEnter_19 (def :  pcf.PolicyGeneralPanelSet_Trav) : void {
      def.onEnter(Claim.Policy, Claim)
    }
    
    // 'def' attribute on PanelRef at ClaimPolicyGeneral.pcf: line 106, column 80
    function def_onEnter_21 (def :  pcf.PolicyGeneralPanelSet_Wc) : void {
      def.onEnter(Claim.Policy, Claim)
    }
    
    // 'def' attribute on PanelRef at ClaimPolicyGeneral.pcf: line 106, column 80
    function def_refreshVariables_14 (def :  pcf.PolicyGeneralPanelSet_Auto) : void {
      def.refreshVariables(Claim.Policy, Claim)
    }
    
    // 'def' attribute on PanelRef at ClaimPolicyGeneral.pcf: line 106, column 80
    function def_refreshVariables_16 (def :  pcf.PolicyGeneralPanelSet_Gl) : void {
      def.refreshVariables(Claim.Policy, Claim)
    }
    
    // 'def' attribute on PanelRef at ClaimPolicyGeneral.pcf: line 106, column 80
    function def_refreshVariables_18 (def :  pcf.PolicyGeneralPanelSet_Pr) : void {
      def.refreshVariables(Claim.Policy, Claim)
    }
    
    // 'def' attribute on PanelRef at ClaimPolicyGeneral.pcf: line 106, column 80
    function def_refreshVariables_20 (def :  pcf.PolicyGeneralPanelSet_Trav) : void {
      def.refreshVariables(Claim.Policy, Claim)
    }
    
    // 'def' attribute on PanelRef at ClaimPolicyGeneral.pcf: line 106, column 80
    function def_refreshVariables_22 (def :  pcf.PolicyGeneralPanelSet_Wc) : void {
      def.refreshVariables(Claim.Policy, Claim)
    }
    
    // 'handlesValidationIssue' attribute on Page (id=ClaimPolicyGeneral) at ClaimPolicyGeneral.pcf: line 11, column 33
    static function handlesValidationIssue_25 (Claim :  Claim, VALUE :  java.lang.Object) : java.lang.Boolean {
      return VALUE typeis entity.Policy or VALUE == Claim.Insured
    }
    
    // 'initialValue' attribute on Variable at ClaimPolicyGeneral.pcf: line 20, column 23
    function initialValue_0 () : Boolean {
      return gw.api.policy.PolicyTypeUtil.hasInternalOnlyFields()
    }
    
    // EditButtons at ClaimPolicyGeneral.pcf: line 95, column 32
    function label_8 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'mode' attribute on PanelRef at ClaimPolicyGeneral.pcf: line 106, column 80
    function mode_23 () : java.lang.Object {
      return gw.config.LOBAbstraction.ForClaim.ForLossType.getUIMode(Claim)
    }
    
    // 'onPick' attribute on PickerToolbarButton (id=ClaimPolicyGeneral_SelectPolicyButton) at ClaimPolicyGeneral.pcf: line 93, column 80
    function onPick_7 (PickedValue :  PolicySummary) : void {
      PolicyRefreshWizard.go(Claim, gw.api.policy.refresh.RefreshPolicyFetcher.createForPolicySelect(Claim, PickedValue))
    }
    
    // Page (id=ClaimPolicyGeneral) at ClaimPolicyGeneral.pcf: line 11, column 33
    static function parent_26 (Claim :  Claim) : pcf.api.Destination {
      return pcf.ClaimPolicyGroup.createDestination(Claim)
    }
    
    // 'visible' attribute on ToolbarButton (id=ClaimPolicyGeneral_RefreshPolicyButton) at ClaimPolicyGeneral.pcf: line 84, column 45
    function visible_1 () : java.lang.Boolean {
      return Claim.LossDate != null
    }
    
    // 'visible' attribute on Toolbar at ClaimPolicyGeneral.pcf: line 24, column 42
    function visible_12 () : java.lang.Boolean {
      return perm.Claim.edit(Claim)
    }
    
    // 'visible' attribute on PickerToolbarButton (id=ClaimPolicyGeneral_SelectPolicyButton) at ClaimPolicyGeneral.pcf: line 93, column 80
    function visible_4 () : java.lang.Boolean {
      return Claim.LossDate != null and perm.Claim.selectpolicy(Claim)
    }
    
    // 'visible' attribute on ToolbarButton (id=ViewInPC) at ClaimPolicyGeneral.pcf: line 102, column 121
    function visible_9 () : java.lang.Boolean {
      return gw.api.system.CCConfigParameters.PolicySystemURL.Value.HasContent and perm.System.viewpolicysystem
    }
    
    property get Claim () : Claim {
      return getVariableValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setVariableValue("Claim", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.ClaimPolicyGeneral {
      return super.CurrentLocation as pcf.ClaimPolicyGeneral
    }
    
    property get HasInternalOnlyFields () : Boolean {
      return getVariableValue("HasInternalOnlyFields", 0) as Boolean
    }
    
    property set HasInternalOnlyFields ($arg :  Boolean) {
      setVariableValue("HasInternalOnlyFields", 0, $arg)
    }
    
    function getClaimAndCheckForUnsavedWork() : Claim {
      if(gw.api.claim.ClaimUtil.doesClaimHaveUnsavedWork()) {
        throw new gw.api.util.DisplayableException(DisplayKey.get("Web.ClaimPolicy.General.UnsavedWorkOnClaim"))
      }
      return Claim
    }
    
    
  }
  
  
}