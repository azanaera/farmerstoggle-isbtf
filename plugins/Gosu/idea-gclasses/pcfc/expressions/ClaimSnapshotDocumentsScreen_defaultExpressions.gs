package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotDocumentsScreen.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotDocumentsScreen_defaultExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotDocumentsScreen.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotDocumentsScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotDocumentsScreen.default.pcf: line 34, column 42
    function sortValue_0 (Document :  dynamic.Dynamic) : java.lang.Object {
      return Document.Name
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotDocumentsScreen.default.pcf: line 39, column 42
    function sortValue_1 (Document :  dynamic.Dynamic) : java.lang.Object {
      return Document.Type
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ClaimSnapshotDocumentsScreen.default.pcf: line 44, column 42
    function sortValue_2 (Document :  dynamic.Dynamic) : java.lang.Object {
      return Document.Status
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at ClaimSnapshotDocumentsScreen.default.pcf: line 49, column 42
    function sortValue_3 (Document :  dynamic.Dynamic) : java.lang.Object {
      return Document.Author
    }
    
    // 'value' attribute on DateCell (id=DateModified_Cell) at ClaimSnapshotDocumentsScreen.default.pcf: line 56, column 42
    function sortValue_4 (Document :  dynamic.Dynamic) : java.lang.Object {
      return Document.DateModified
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotDocumentsScreen.default.pcf: line 21, column 37
    function value_21 () : dynamic.Dynamic {
      return (SnapshotParam.Documents as Object[]).where(\ d -> Claim.canViewDocumentSnapshot(User.util.CurrentUser, d))
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get SnapshotParam () : dynamic.Dynamic {
      return getRequireValue("SnapshotParam", 0) as dynamic.Dynamic
    }
    
    property set SnapshotParam ($arg :  dynamic.Dynamic) {
      setRequireValue("SnapshotParam", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotDocumentsScreen.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotDocumentsScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'icon' attribute on BooleanRadioCell (id=Icon_Cell) at ClaimSnapshotDocumentsScreen.default.pcf: line 29, column 34
    function icon_5 () : java.lang.String {
      return Document.Icon
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotDocumentsScreen.default.pcf: line 34, column 42
    function valueRoot_7 () : java.lang.Object {
      return Document
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ClaimSnapshotDocumentsScreen.default.pcf: line 44, column 42
    function value_12 () : dynamic.Dynamic {
      return Document.Status
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at ClaimSnapshotDocumentsScreen.default.pcf: line 49, column 42
    function value_15 () : dynamic.Dynamic {
      return Document.Author
    }
    
    // 'value' attribute on DateCell (id=DateModified_Cell) at ClaimSnapshotDocumentsScreen.default.pcf: line 56, column 42
    function value_18 () : dynamic.Dynamic {
      return Document.DateModified
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotDocumentsScreen.default.pcf: line 34, column 42
    function value_6 () : dynamic.Dynamic {
      return Document.Name
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotDocumentsScreen.default.pcf: line 39, column 42
    function value_9 () : dynamic.Dynamic {
      return Document.Type
    }
    
    property get Document () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}