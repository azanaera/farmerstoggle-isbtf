package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/policy/ClaimPolicyEndorsements.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimPolicyEndorsementsExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/policy/ClaimPolicyEndorsements.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimPolicyEndorsementsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (Claim :  Claim) : int {
      return 0
    }
    
    // 'canEdit' attribute on Page (id=ClaimPolicyEndorsements) at ClaimPolicyEndorsements.pcf: line 9, column 77
    function canEdit_7 () : java.lang.Boolean {
      return gw.api.policy.PolicyTabUtil.hasTab(Claim, "Endorsements") and perm.Claim.edit(Claim) and perm.Policy.edit(Claim)
    }
    
    // 'canVisit' attribute on Page (id=ClaimPolicyEndorsements) at ClaimPolicyEndorsements.pcf: line 9, column 77
    static function canVisit_8 (Claim :  Claim) : java.lang.Boolean {
      return gw.api.policy.PolicyTabUtil.hasTab(Claim, "Endorsements") and perm.Policy.view(Claim) and perm.System.viewpolicy
    }
    
    // Page (id=ClaimPolicyEndorsements) at ClaimPolicyEndorsements.pcf: line 9, column 77
    static function parent_9 (Claim :  Claim) : pcf.api.Destination {
      return pcf.ClaimPolicyGroup.createDestination(Claim)
    }
    
    // 'addVisible' attribute on IteratorButtons at ClaimPolicyEndorsements.pcf: line 23, column 34
    function visible_0 () : java.lang.Boolean {
      return perm.Claim.edit(Claim) and perm.Policy.edit(Claim)
    }
    
    property get Claim () : Claim {
      return getVariableValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setVariableValue("Claim", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.ClaimPolicyEndorsements {
      return super.CurrentLocation as pcf.ClaimPolicyEndorsements
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/claim/policy/ClaimPolicyEndorsements.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends ClaimPolicyEndorsementsExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at ClaimPolicyEndorsements.pcf: line 37, column 67
    function def_onEnter_1 (def :  pcf.EndorsementsLV) : void {
      def.onEnter(Claim.Policy.Endorsements, Claim)
    }
    
    // 'def' attribute on PanelRef at ClaimPolicyEndorsements.pcf: line 43, column 54
    function def_onEnter_5 (def :  pcf.EndorsementDetailDV) : void {
      def.onEnter(Endorsement)
    }
    
    // 'def' attribute on PanelRef at ClaimPolicyEndorsements.pcf: line 37, column 67
    function def_refreshVariables_2 (def :  pcf.EndorsementsLV) : void {
      def.refreshVariables(Claim.Policy.Endorsements, Claim)
    }
    
    // 'def' attribute on PanelRef at ClaimPolicyEndorsements.pcf: line 43, column 54
    function def_refreshVariables_6 (def :  pcf.EndorsementDetailDV) : void {
      def.refreshVariables(Endorsement)
    }
    
    // EditButtons at ClaimPolicyEndorsements.pcf: line 57, column 121
    function label_4 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'editVisible' attribute on EditButtons at ClaimPolicyEndorsements.pcf: line 57, column 121
    function visible_3 () : java.lang.Boolean {
      return perm.Claim.edit(Claim) and perm.Policy.edit(Claim) and perm.Policy.makeeditable(Claim)
    }
    
    property get Endorsement () : Endorsement {
      return getCurrentSelection(1) as Endorsement
    }
    
    property set Endorsement ($arg :  Endorsement) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}