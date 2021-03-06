package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/FNOL/NewClaimNewExposureMenuItemSet.both.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewClaimNewExposureMenuItemSet_bothExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/FNOL/NewClaimNewExposureMenuItemSet.both.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MenuItemTreeEntry2ExpressionsImpl extends NewClaimNewExposureMenuItemSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=item) at NewClaimNewExposureMenuItemSet.both.pcf: line 43, column 38
    function action_6 () : void {
      NewClaimWizard_NewExposurePopup.push(claim, wizard, item.loadCoverageFromBundle(claim), item.CoverageType, item.CoverageSubtype)
    }
    
    // 'action' attribute on MenuItem (id=item) at NewClaimNewExposureMenuItemSet.both.pcf: line 43, column 38
    function action_dest_7 () : pcf.api.Destination {
      return pcf.NewClaimWizard_NewExposurePopup.createDestination(claim, wizard, item.loadCoverageFromBundle(claim), item.CoverageType, item.CoverageSubtype)
    }
    
    // 'available' attribute on MenuItem (id=item) at NewClaimNewExposureMenuItemSet.both.pcf: line 43, column 38
    function available_5 () : java.lang.Boolean {
      return (item.CoverageType != null and item.CoverageSubtype != null) or item.Children.length > 0
    }
    
    // 'children' attribute on MenuItemTree at NewClaimNewExposureMenuItemSet.both.pcf: line 37, column 59
    function children_9 () : java.lang.Object {
      return item.Children
    }
    
    // 'label' attribute on MenuItem (id=item) at NewClaimNewExposureMenuItemSet.both.pcf: line 43, column 38
    function label_8 () : java.lang.Object {
      return item.DisplayLabel
    }
    
    property get item () : gw.api.exposure.NewExposureMenuItem {
      return getIteratedValue(1) as gw.api.exposure.NewExposureMenuItem
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/claim/FNOL/NewClaimNewExposureMenuItemSet.both.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MenuItemTreeEntryExpressionsImpl extends NewClaimNewExposureMenuItemSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=item) at NewClaimNewExposureMenuItemSet.both.pcf: line 27, column 38
    function action_0 () : void {
      NewClaimWizard_NewExposurePopup.push(claim, wizard, item.loadCoverageFromBundle(claim), item.CoverageType, item.CoverageSubtype)
    }
    
    // 'action' attribute on MenuItem (id=item) at NewClaimNewExposureMenuItemSet.both.pcf: line 27, column 38
    function action_dest_1 () : pcf.api.Destination {
      return pcf.NewClaimWizard_NewExposurePopup.createDestination(claim, wizard, item.loadCoverageFromBundle(claim), item.CoverageType, item.CoverageSubtype)
    }
    
    // 'children' attribute on MenuItemTree at NewClaimNewExposureMenuItemSet.both.pcf: line 21, column 59
    function children_3 () : java.lang.Object {
      return item.Children
    }
    
    // 'label' attribute on MenuItem (id=item) at NewClaimNewExposureMenuItemSet.both.pcf: line 27, column 38
    function label_2 () : java.lang.Object {
      return item.DisplayLabel
    }
    
    property get item () : gw.api.exposure.NewExposureMenuItem {
      return getIteratedValue(1) as gw.api.exposure.NewExposureMenuItem
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/claim/FNOL/NewClaimNewExposureMenuItemSet.both.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewClaimNewExposureMenuItemSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on MenuItemTree at NewClaimNewExposureMenuItemSet.both.pcf: line 37, column 59
    function value_10 () : gw.api.exposure.NewExposureMenuItem[] {
      return gw.api.exposure.NewExposureMenuUtil.createItemsByCoverage(claim)
    }
    
    // 'value' attribute on MenuItemTree at NewClaimNewExposureMenuItemSet.both.pcf: line 21, column 59
    function value_4 () : gw.api.exposure.NewExposureMenuItem[] {
      return gw.api.exposure.NewExposureMenuUtil.createItemsByCoverageType(claim)
    }
    
    property get claim () : Claim {
      return getRequireValue("claim", 0) as Claim
    }
    
    property set claim ($arg :  Claim) {
      setRequireValue("claim", 0, $arg)
    }
    
    property get wizard () : gw.api.claim.NewClaimWizardInfo {
      return getRequireValue("wizard", 0) as gw.api.claim.NewClaimWizardInfo
    }
    
    property set wizard ($arg :  gw.api.claim.NewClaimWizardInfo) {
      setRequireValue("wizard", 0, $arg)
    }
    
    
  }
  
  
}