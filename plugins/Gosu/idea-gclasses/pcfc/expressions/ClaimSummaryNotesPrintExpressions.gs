package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimSummaryNotesPrint.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSummaryNotesPrintExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimSummaryNotesPrint.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSummaryNotesPrintExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (Claim :  Claim) : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=ClaimSummaryNotesPrint) at ClaimSummaryNotesPrint.pcf: line 11, column 26
    static function canVisit_2 (Claim :  Claim) : java.lang.Boolean {
      return perm.Claim.view(Claim) and perm.System.viewclaimsummary
    }
    
    // 'def' attribute on PanelRef at ClaimSummaryNotesPrint.pcf: line 20, column 44
    function def_onEnter_0 (def :  pcf.NotesLV) : void {
      def.onEnter(Claim.ViewableNotes)
    }
    
    // 'def' attribute on PanelRef at ClaimSummaryNotesPrint.pcf: line 20, column 44
    function def_refreshVariables_1 (def :  pcf.NotesLV) : void {
      def.refreshVariables(Claim.ViewableNotes)
    }
    
    // 'parent' attribute on Page (id=ClaimSummaryNotesPrint) at ClaimSummaryNotesPrint.pcf: line 11, column 26
    static function parent_3 (Claim :  Claim) : pcf.api.Destination {
      return pcf.ClaimPrintout.createDestination(Claim)
    }
    
    property get Claim () : Claim {
      return getVariableValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setVariableValue("Claim", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.ClaimSummaryNotesPrint {
      return super.CurrentLocation as pcf.ClaimSummaryNotesPrint
    }
    
    
  }
  
  
}