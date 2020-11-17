package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/financials/checks/CheckLevyWarn_ExtWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CheckLevyWarn_ExtWorksheetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/financials/checks/CheckLevyWarn_ExtWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CheckLevyWarn_ExtWorksheetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=CheckDuplicatesWorksheet_CloseButton) at CheckLevyWarn_ExtWorksheet.pcf: line 21, column 25
    function action_0 () : void {
      CurrentLocation.cancel()
    }
    
    override property get CurrentLocation () : pcf.CheckLevyWarn_ExtWorksheet {
      return super.CurrentLocation as pcf.CheckLevyWarn_ExtWorksheet
    }
    
    
  }
  
  
}