package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/planofaction/EditableNegotiationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditableNegotiationsLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/planofaction/EditableNegotiationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditableNegotiationsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=CreateTime_Cell) at EditableNegotiationsLV.pcf: line 36, column 25
    function sortValue_0 (Negotiation :  entity.Negotiation) : java.lang.Object {
      return Negotiation.CreateTime
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at EditableNegotiationsLV.pcf: line 42, column 37
    function sortValue_1 (Negotiation :  entity.Negotiation) : java.lang.Object {
      return Negotiation.Name
    }
    
    // 'toRemove' attribute on RowIterator at EditableNegotiationsLV.pcf: line 24, column 40
    function toRemove_9 (Negotiation :  entity.Negotiation) : void {
      claim.removeFromNegotiations(Negotiation)
    }
    
    // 'value' attribute on RowIterator at EditableNegotiationsLV.pcf: line 24, column 40
    function value_10 () : entity.Negotiation[] {
      return NegotiationList
    }
    
    property get NegotiationList () : Negotiation[] {
      return getRequireValue("NegotiationList", 0) as Negotiation[]
    }
    
    property set NegotiationList ($arg :  Negotiation[]) {
      setRequireValue("NegotiationList", 0, $arg)
    }
    
    property get claim () : Claim {
      return getRequireValue("claim", 0) as Claim
    }
    
    property set claim ($arg :  Claim) {
      setRequireValue("claim", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/claim/planofaction/EditableNegotiationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends EditableNegotiationsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'condition' attribute on ToolbarFlag at EditableNegotiationsLV.pcf: line 27, column 27
    function condition_2 () : java.lang.Boolean {
      return perm.Evaluation.edit(claim)
    }
    
    // 'value' attribute on DateCell (id=CreateTime_Cell) at EditableNegotiationsLV.pcf: line 36, column 25
    function valueRoot_4 () : java.lang.Object {
      return Negotiation
    }
    
    // 'value' attribute on DateCell (id=CreateTime_Cell) at EditableNegotiationsLV.pcf: line 36, column 25
    function value_3 () : java.util.Date {
      return Negotiation.CreateTime
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at EditableNegotiationsLV.pcf: line 42, column 37
    function value_6 () : java.lang.String {
      return Negotiation.Name
    }
    
    property get Negotiation () : entity.Negotiation {
      return getIteratedValue(1) as entity.Negotiation
    }
    
    
  }
  
  
}